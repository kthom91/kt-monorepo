import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  catchError,
  concat,
  delay,
  map,
  mergeMap,
  Observable,
  tap,
  toArray,
} from 'rxjs';
import { Setlist, SetlistFmResponse } from '@kt-monorepo/kt-shared';
import { SETLIST_FM_URL } from './common/utils/app.constants';

const ERROR_MSG = 'Error while fetching setlists';

@Injectable()
export class SetlistFmService {
  headers = {
    Accept: 'application/json',
    'x-api-key': process.env.SETLIST_FM_API_KEY,
  };

  constructor(private readonly httpService: HttpService) {}

  getSetlistFmUserDetails(): Observable<Setlist[]> {
    return this.httpService.get(SETLIST_FM_URL, { headers: this.headers }).pipe(
      map((resp) => resp.data),
      delay(600), // API Rate Limit 2/s
      mergeMap((data: SetlistFmResponse) => this.getRemainingSetlists(data)),
      catchError((err) => {
        console.error(`${ERROR_MSG} : ${err}`);
        throw new HttpException(ERROR_MSG, HttpStatus.SERVICE_UNAVAILABLE);
      })
    );
  }

  // Fetch remaining setlists and merge with first page
  private getRemainingSetlists(
    response: SetlistFmResponse
  ): Observable<Setlist[]> {
    const totalPageCount = Math.ceil(response.total / response.itemsPerPage);
    const requests: Observable<any>[] = [];
    for (let i = 2; i <= totalPageCount; i++) {
      const params = { p: i };
      requests.push(
        this.httpService
          .get(SETLIST_FM_URL, {
            headers: this.headers,
            params: params,
          })
          .pipe(delay(600)) // API Rate Limit 2/s
      );
    }

    console.log('# of remaining Setlist.fm requests: ' + requests.length);

    return concat(...requests).pipe(
      map((res) => res.data?.setlist),
      map((setlistArray) =>
        setlistArray.map((setlist: Setlist) => {
          const dateParts = setlist.eventDate.split('-').map((s) => Number(s));
          setlist.eventDateAsDate = new Date(
            dateParts[2],
            dateParts[1] - 1,
            dateParts[0]
          );
          return setlist;
        })
      ),
      toArray(),
      tap((setlistArray) => setlistArray.splice(0, 0, ...response.setlist))
    );
  }
}

import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
import { Setlist, SetlistFmResponse } from '@kt-monorepo/kt-shared';

const SETLIST_FM_URL = 'https://api.setlist.fm/rest/1.0/user/kentrain/attended';
const ERROR_MSG = 'Error while fetching setlists';

@Injectable()
export class SetlistFmService {
  headers = {
    'Accept': 'application/json',
    'x-api-key': process.env.SETLIST_FM_API_KEY
  };

  constructor(private readonly httpService: HttpService) {}

  getSetlistFmUserDetails(): Observable<Setlist[]> {
    return this.httpService.get(SETLIST_FM_URL, { headers: this.headers }).pipe(
      map(resp => resp.data),
      map((data: SetlistFmResponse) => data.setlist),
      catchError(err => { 
        console.error(`${ERROR_MSG} : ${err}`);
        throw new HttpException(ERROR_MSG, HttpStatus.SERVICE_UNAVAILABLE); })
    );
  }
}

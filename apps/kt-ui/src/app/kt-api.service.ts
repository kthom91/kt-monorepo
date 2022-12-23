import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { KtApiResponse, Setlist } from '@kt-monorepo/kt-shared';

@Injectable({
  providedIn: 'root'
})
export class KtApiService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<string> {
    return this.httpClient.get<KtApiResponse>(environment.apiUrl)
      .pipe(
        map((r: KtApiResponse) => r.message)
      );
  }

  getSetlistFmDetails(): Observable<Setlist[]> {
    return this.httpClient.get<Setlist[]>(`${environment.apiUrl}/setlist-fm/user`);
  }
}

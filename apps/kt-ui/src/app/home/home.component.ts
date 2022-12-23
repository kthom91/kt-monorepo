import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Setlist } from '@kt-monorepo/kt-shared';
import { Observable } from 'rxjs';
import { KtApiService } from '../kt-api.service';

@Component({
  selector: 'kt-monorepo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  setlists$: Observable<Setlist[]> | undefined;

  constructor(private service: KtApiService ) {}

  ngOnInit(): void {
    this.setlists$ = this.service.getSetlistFmDetails();
  }

}

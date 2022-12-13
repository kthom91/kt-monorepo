import { Component, OnInit } from '@angular/core';
import { KtApiService } from '../kt-api.service';

@Component({
  selector: 'kt-monorepo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  response: String | undefined;

  constructor(private service: KtApiService ) {}

  ngOnInit(): void {
    this.service.getData().subscribe(resp => this.response = resp);
  }

}

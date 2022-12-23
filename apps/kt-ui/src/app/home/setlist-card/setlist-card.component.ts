import { Component, Input } from '@angular/core';
import { Setlist } from '@kt-monorepo/kt-shared';

@Component({
  selector: 'kt-monorepo-setlist-card',
  templateUrl: './setlist-card.component.html',
  styleUrls: ['./setlist-card.component.scss'],
})
export class SetlistCardComponent {
  @Input()
  setlist!: Setlist;
}

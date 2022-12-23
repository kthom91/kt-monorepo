import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetlistCardComponent } from './setlist-card.component';

describe('SetlistCardComponent', () => {
  let component: SetlistCardComponent;
  let fixture: ComponentFixture<SetlistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetlistCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SetlistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsManagerComponent } from './meetings-manager.component';

describe('MeetingsManagerComponent', () => {
  let component: MeetingsManagerComponent;
  let fixture: ComponentFixture<MeetingsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingsManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectingListComponent } from './prospecting-list.component';

describe('ProspectingListComponent', () => {
  let component: ProspectingListComponent;
  let fixture: ComponentFixture<ProspectingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspectingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProspectingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

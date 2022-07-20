import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectPopUpComponent } from './prospect-pop-up.component';

describe('ProspectPopUpComponent', () => {
  let component: ProspectPopUpComponent;
  let fixture: ComponentFixture<ProspectPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspectPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProspectPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

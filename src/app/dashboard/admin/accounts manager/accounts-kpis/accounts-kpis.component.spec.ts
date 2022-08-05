import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsKPIsComponent } from './accounts-kpis.component';

describe('AccountsKPIsComponent', () => {
  let component: AccountsKPIsComponent;
  let fixture: ComponentFixture<AccountsKPIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsKPIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsKPIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

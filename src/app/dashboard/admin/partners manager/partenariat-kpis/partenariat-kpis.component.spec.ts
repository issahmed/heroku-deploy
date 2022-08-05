import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenariatKPIsComponent } from './partenariat-kpis.component';

describe('PartenariatKPIsComponent', () => {
  let component: PartenariatKPIsComponent;
  let fixture: ComponentFixture<PartenariatKPIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenariatKPIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartenariatKPIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

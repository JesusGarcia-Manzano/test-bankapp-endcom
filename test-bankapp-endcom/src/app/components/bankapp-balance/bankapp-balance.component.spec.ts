import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankappBalanceComponent } from './bankapp-balance.component';

describe('BankappBalanceComponent', () => {
  let component: BankappBalanceComponent;
  let fixture: ComponentFixture<BankappBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankappBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankappBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

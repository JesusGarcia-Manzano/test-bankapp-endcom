import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankappMyAcountsComponent } from './bankapp-my-acounts.component';

describe('BankappMyAcountsComponent', () => {
  let component: BankappMyAcountsComponent;
  let fixture: ComponentFixture<BankappMyAcountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankappMyAcountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankappMyAcountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

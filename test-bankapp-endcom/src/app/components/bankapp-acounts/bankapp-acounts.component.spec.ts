import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankappAcountsComponent } from './bankapp-acounts.component';

describe('BankappAcountsComponent', () => {
  let component: BankappAcountsComponent;
  let fixture: ComponentFixture<BankappAcountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankappAcountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankappAcountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

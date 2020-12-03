import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankappMovementsComponent } from './bankapp-movements.component';

describe('BankappMovementsComponent', () => {
  let component: BankappMovementsComponent;
  let fixture: ComponentFixture<BankappMovementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankappMovementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankappMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

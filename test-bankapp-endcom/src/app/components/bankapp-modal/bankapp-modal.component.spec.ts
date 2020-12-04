import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankappModalComponent } from './bankapp-modal.component';

describe('BankappModalComponent', () => {
  let component: BankappModalComponent;
  let fixture: ComponentFixture<BankappModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankappModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankappModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

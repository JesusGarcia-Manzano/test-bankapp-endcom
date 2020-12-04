import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankappFooterComponent } from './bankapp-footer.component';

describe('BankappFooterComponent', () => {
  let component: BankappFooterComponent;
  let fixture: ComponentFixture<BankappFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankappFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankappFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankappNavComponent } from './bankapp-nav.component';

describe('BankappNavComponent', () => {
  let component: BankappNavComponent;
  let fixture: ComponentFixture<BankappNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankappNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankappNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBookingComponent } from './product-booking.component';

describe('ProductBookingComponent', () => {
  let component: ProductBookingComponent;
  let fixture: ComponentFixture<ProductBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBookingComponent]
    });
    fixture = TestBed.createComponent(ProductBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

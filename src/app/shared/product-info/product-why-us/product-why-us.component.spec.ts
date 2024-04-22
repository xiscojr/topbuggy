import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWhyUsComponent } from './product-why-us.component';

describe('ProductWhyUsComponent', () => {
  let component: ProductWhyUsComponent;
  let fixture: ComponentFixture<ProductWhyUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductWhyUsComponent]
    });
    fixture = TestBed.createComponent(ProductWhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

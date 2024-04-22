import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIncludedComponent } from './product-included.component';

describe('ProductIncludedComponent', () => {
  let component: ProductIncludedComponent;
  let fixture: ComponentFixture<ProductIncludedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductIncludedComponent]
    });
    fixture = TestBed.createComponent(ProductIncludedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

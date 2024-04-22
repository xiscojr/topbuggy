import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageCaruselComponent } from './product-image-carusel.component';

describe('ProductImageCaruselComponent', () => {
  let component: ProductImageCaruselComponent;
  let fixture: ComponentFixture<ProductImageCaruselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductImageCaruselComponent]
    });
    fixture = TestBed.createComponent(ProductImageCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

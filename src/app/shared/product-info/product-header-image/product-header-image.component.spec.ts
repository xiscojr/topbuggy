import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHeaderImageComponent } from './product-header-image.component';

describe('ProductHeaderImageComponent', () => {
  let component: ProductHeaderImageComponent;
  let fixture: ComponentFixture<ProductHeaderImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductHeaderImageComponent]
    });
    fixture = TestBed.createComponent(ProductHeaderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImportantInfoComponent } from './product-important-info.component';

describe('ProductImportantInfoComponent', () => {
  let component: ProductImportantInfoComponent;
  let fixture: ComponentFixture<ProductImportantInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductImportantInfoComponent]
    });
    fixture = TestBed.createComponent(ProductImportantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

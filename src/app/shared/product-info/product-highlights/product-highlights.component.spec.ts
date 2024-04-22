import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHighlightsComponent } from './product-highlights.component';

describe('ProductHighlightsComponent', () => {
  let component: ProductHighlightsComponent;
  let fixture: ComponentFixture<ProductHighlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductHighlightsComponent]
    });
    fixture = TestBed.createComponent(ProductHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

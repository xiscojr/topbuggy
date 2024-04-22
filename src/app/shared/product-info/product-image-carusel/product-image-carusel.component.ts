import { NgClass, NgIf, NgFor } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { LanguageManagerService } from '../../../language-manager.service';
import { ProductsService } from '../../main-modules/products/products.service';
import { ReviewCardComponent } from '../../main-modules/review-card/review-card.component';

@Component({
  selector: 'app-product-image-carusel',
  templateUrl: './product-image-carusel.component.html',
  styleUrls: ['../../../../../node_modules/keen-slider/keen-slider.min.css', './product-image-carusel.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})

export class ProductImageCaruselComponent {
  @Input() productImages: string[] = [];
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement> | any
  currentSlide: number = 1

  dotHelper: Array<Number> = []
  slider: KeenSliderInstance = null!

  constructor() {

    afterNextRender(() => {
      this.loadKeenSlider();

    });

  }
  loadKeenSlider() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      mode: "free",
      breakpoints: {
        "(min-width: 0px)": {
          slides: { origin: "center", perView: 1, spacing: 0 },
        },
        "(min-width: 992px)": {
          slides: { origin: "center", perView: 3, spacing: 24 },
        },
      },
      slides: { origin: "center", perView: 3, spacing: 24 },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
      },
    })
    this.dotHelper = [
      ...Array(this.slider.track.details.slides.length).keys(),
    ]
  }


}

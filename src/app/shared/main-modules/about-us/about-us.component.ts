import { NgClass, NgIf, NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { LanguageManagerService } from '../../../language-manager.service';
import { ProductsService } from '../products/products.service';
import { ReviewCardComponent } from '../review-card/review-card.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ["../../../../../node_modules/keen-slider/keen-slider.min.css", './about-us.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class AboutUsComponent {
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement> | any;

  currentSlide: number = 0;
  dotHelper: Array<Number> = []
  slider: KeenSliderInstance = null!

  constructor(private translateService: TranslateService, private languageManager: LanguageManagerService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      
    })
  }


  keenSliderInit() {

    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: this.currentSlide,
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
      },
    })
    this.dotHelper = [
      ...Array(this.slider.track.details.slides.length).keys(),
    ]
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}

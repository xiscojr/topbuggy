import { afterNextRender, Component, ElementRef, Input, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { ProductsService } from '../products/products.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageManagerService } from '../../../language-manager.service';
import { ReviewCardComponent } from '../review-card/review-card.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss', "../../../../../node_modules/keen-slider/keen-slider.min.css"],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class ReviewsComponent {
  @Input() receivedData: any;
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement> | any;

  currentSlide: number = 0;
  dotHelper: Array<Number> = [];
  dotDivider: number = 0;
  dotAux: number = 0;
  slidesLength: number = 0;
  slider: KeenSliderInstance = null!;
  experiencesIds: any;
  language: any;
  reviews: any;


  constructor(private productsService: ProductsService, public translateService: TranslateService, private languageManager:  LanguageManagerService) {

    this.languageManager.currentLanguage$.subscribe(language => {
      this.language = language;
      
    });

    afterNextRender(() => {
      this.updateScreenSize();
      this.language = this.languageManager.currentLanguage;

      this.loadExperienceIdArray();

      this.keenSliderInit();



    })
  }
  keenSliderInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
        breakpoints: {
          "(min-width: 0px)": {
            slides: { perView: 1, spacing: 0, origin: 'center' },

          },
          "(min-width: 525px)": {
            slides: { perView: 1.5, spacing: 15, origin: 'center' },

          },
          "(min-width: 768px)": {
            slides: { perView: 2, spacing: 0 },
          },
          "(min-width: 992px)": {
            slides: { perView: 3, spacing: 0 },

          },
          // "(min-width: 1400px)": {
          //   slides: { perView: 4, spacing: 0 },
          // },
        },
        slides: { perView: 1, spacing: 0 },
      })
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length - this.dotAux).keys()
      ]

      this.slidesLength = Math.ceil(this.slider.track.details.slides.length / this.dotDivider) + this.dotAux

    }, 1000);
  }

  ngOnInit() {
    this.loadExperienceIdArray()
  }


  // Update the variable based on the window size
  updateScreenSize(): void {
    const width = window.innerWidth;

    if (width < 768) {
      this.dotAux = 0;
    } else if (width < 992) {
      this.dotAux = 1;
    } else if (width < 1400) {
      this.dotAux = 2;
    } else {
      this.dotAux = 3;
    }
  }

  loadExperienceIdArray() {
    if (this.receivedData) {
      this.getReviewsByExperiencesIds([this.receivedData]);
    } else {
      this.productsService.getMakerById(this.language).subscribe((maker: any) => {
        this.experiencesIds = maker['hydra:member'][0].experiences;
        this.getReviewsByExperiencesIds(this.experiencesIds);
        (error: any) => {
          console.log(error);
        };

      })
    }
  }

  getReviewsByExperiencesIds(idArray: string[]) {
    this.productsService.getMakerReviews(idArray, this.language).subscribe((makerReviews: any) => {
      this.reviews = makerReviews['hydra:member'];
    });
  }
}

import { Component, Renderer2, afterNextRender } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

import { LanguageManagerService } from '../../language-manager.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { AdditionalInfoComponent } from '../../shared/product-info/additional-info/additional-info.component';
import { ProductHighlightsComponent } from '../../shared/product-info/product-highlights/product-highlights.component';
import { ProductImageCaruselComponent } from '../../shared/product-info/product-image-carusel/product-image-carusel.component';
import { DividerComponent } from '../../shared/main-modules/divider/divider.component';
import { ProductsService } from '../../shared/main-modules/products/products.service';
import { ReviewCardComponent } from '../../shared/main-modules/review-card/review-card.component';
import { ReviewsComponent } from '../../shared/main-modules/reviews/reviews.component';
import { ProductDescriptionComponent } from '../../shared/product-info/product-description/product-description.component';
import { ProductHeaderImageComponent } from '../../shared/product-info/product-header-image/product-header-image.component';
import { ProductIncludedComponent } from '../../shared/product-info/product-included/product-included.component';
import { ProductBookingComponent } from '../../shared/product-info/product-booking/product-booking.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService],
  imports: [
    ProductBookingComponent,
    ProductHeaderImageComponent,
    ProductHeaderImageComponent,
    ProductDescriptionComponent,
    ProductHighlightsComponent,
    AdditionalInfoComponent,
    ProductIncludedComponent,
    ProductImageCaruselComponent,
    DividerComponent,
    ReviewsComponent,
    TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent,
  ]
})
export class ProductComponent {
  currentLanguage = 'es';
  productId: any;
  product: any;
  productImages: string[] = [];
  productGeneralInfo: any = {};
  productPriceInfo: any = {};
  turitopId: any;
  language: any;
  productSlug: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    public translateService: TranslateService,
    private meta: Meta,
    private title: Title,
    private renderer2: Renderer2,
    private languageManager: LanguageManagerService
  ) {



    this.languageManager.currentLanguage$.subscribe(language => {
      this.language = language;
      this.currentLanguage = language;


      if(this.product && this.product.slug){
        this.getProducts(this.product.slug);
      }
      
    });


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.productSlug = event.url.split('/').pop();
        if (event.url.includes('product')) {
          this.currentLanguage = this.translateService.currentLang;
          this.getProducts(this.productSlug);
        }
      }
    });


    afterNextRender(() => {

      //this.removeMetaTags();
      var productSlug = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path;

      this.currentLanguage = this.translateService.currentLang;

      this.getProducts(productSlug);

      this.loadBookingEngine();
       

    });

  }
  loadBookingEngine() {
    if (this.product.maker.bookingEngine) {
      if (this.product.maker.bookingEngine == 'Turitop') {
        this.turitopId = this.product.turitopId;
        setTimeout(() => {
          let calendar: any = document.getElementById('turitop-calendar');
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.src = "https://app.turitop.com/js/load-turitop.min.js";
          s.id = "js-turitop";
          s.setAttribute('data-company', this.product.maker.bookingEngineWidget);
          s.setAttribute('data-ga', 'no');
          s.setAttribute('data-buttoncolor', 'green');
          s.setAttribute('data-afftag', 'ttafid');
          calendar.appendChild(s);
        }, 1000);
      } if (this.product.maker.bookingEngine == 'Fareharbor') {
        setTimeout(() => {
          let calendar: any = document.getElementById("fareharbor-calendar");
          let fareharbor: any = document.getElementsByClassName("fareharbor-calendar-wrap")[0];
          (fareharbor as any).style.display = "block";
          (fareharbor as any).parentNode.removeChild(fareharbor);
          (fareharbor.firstChild as any).src = "https://fareharbor.com/embeds/calendar/" + this.product.maker.bookingEngineWidget + "/items/" + this.product.fareharborId + "?fallback=simple&flow=no&back=https://venntur.com/es/product/" + this.product.slug + '&flow=no&full-items=yes&language=' + this.currentLanguage;
          calendar.appendChild(fareharbor);
        }, 1000);
      }
    }
  }


  getProducts(productSlug: string) {
  
    this.productsService.getExperienceBySlug(productSlug, this.translateService.currentLang).subscribe((data: any) => {
      if (data['hydra:member'].length == 0) {
        this.router.navigate(['es/not-found'])
      }
      data = data['hydra:member'][0];
      this.productsService.getExperience(data['@id'], this.translateService.currentLang).subscribe((product: any) => {
        this.productId = product.id;

        this.product = product;

        this.product.mediaExperiences.forEach((mediaProduct: any) => {
          this.productImages.push(mediaProduct.contentUrl)
        });

        this.productGeneralInfo.weekDays = product.weekDays;
        this.productGeneralInfo.duration = product.duration;
        this.productGeneralInfo.languages = product.languages;
        this.productGeneralInfo.includes = product.includes;
        this.productGeneralInfo.notIncludes = product.notIncludes;

        this.productPriceInfo.price = product.price;
        this.productPriceInfo.modalities = product.modalities;

        this.meta.addTags([
          { name: 'description', content: this.product.description },
          { name: 'lang', content: 'es' },
          { name: 'robots', content: 'index, follow' },
          { property: 'og:title', content: this.product.name },
          { property: 'og:description', content: this.product.description },
          { property: 'og:image', content: 'https://venntur.com/assets/experience/files/' + product.mediaExperiences[0].contentUrl },
          { property: 'og:url', content: 'https://bedebe-tours.com/' + this.product.slug },
          { property: 'og:site_name', content: 'Bedebe Tours' }
        ]);
        this.setTitle(this.product.name);
        
      });
    }
    );

}

  removeMetaTags() {
    const metaTags = Array.from(document.querySelectorAll('meta'));

    metaTags.forEach((metaTag: Element) => {
      this.renderer2.removeChild(document.head, metaTag);
    });
  }

  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

}

import { Component, HostListener, afterNextRender } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { LanguageManagerService } from '../../../language-manager.service';
import { ProductsService } from '../products/products.service';
import { ReviewCardComponent } from '../review-card/review-card.component';


@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class CtaComponent {
  makerExperiences: any;
  language: any;

  constructor(private productsService: ProductsService, public translateService: TranslateService, private languageManager: LanguageManagerService) {

    // Esto es lo que se encarga de actualizar el idioma del producto
    this.languageManager.currentLanguage$.subscribe(language => {
      this.language = language;
      this.getProducts(this.language);

    });


  }

  getProducts(language: any) {
    this.productsService.getExperienceByMakerId(language).subscribe((maker: any) => {
      this.makerExperiences = maker['hydra:member'];

      (error: any) => {
        console.log(error);
      };

    });
  }

  goToProducts() {
    (document.getElementById("products") as any).scrollIntoView();
  }

  getProductRoute(slug: string) {

    window.open(this.language + '/product/' + slug, '_blank');

  }

}

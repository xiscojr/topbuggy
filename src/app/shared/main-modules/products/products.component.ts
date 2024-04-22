import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageManagerService } from '../../../language-manager.service';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent, ProductCardComponent]
})
export class ProductsComponent {

  makerExperiences: any
  language: any;

  constructor(private productsService: ProductsService, public translateService: TranslateService, private languageManager: LanguageManagerService) {
   
    this.languageManager.currentLanguage$.subscribe(language => {
      this.language = language;
    
        this.getProducts();

    });

    //this.language = this.translateService.currentLang;
  }
  getProducts() {
    this.productsService.getMakerById(this.language).subscribe((maker: any) => {
      this.makerExperiences = maker['hydra:member'][0].experiences;

      (error: any) => {
        console.log(error);
      };

    });

  }

  ngOnInit() {

    this.language = this.translateService.currentLang;
    this.getProducts();
  }
}

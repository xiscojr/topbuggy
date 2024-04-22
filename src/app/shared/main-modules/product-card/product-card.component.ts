import { Component, Input, afterNextRender } from '@angular/core';
import { ProductsService } from './../products/products.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageManagerService } from '../../../language-manager.service';
import { ReviewCardComponent } from '../review-card/review-card.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class ProductCardComponent {
  @Input() receivedData: any;
  experience: any;
  language: any;
  pattern: any;
  match: any;
  week = ['Every day"', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  duration: any;

  constructor(
    private productsService: ProductsService,
    public translateService: TranslateService,
    private languageManager: LanguageManagerService
  ) {

    this.languageManager.currentLanguage$.subscribe(language => {
      this.language = language;


      if (this.receivedData) {
        this.getProducts();
      }


    });


    afterNextRender(() => {
      this.getProducts();
    });

  }


  getProducts() {
    this.productsService.getExperience(this.receivedData, this.language).subscribe((experience: any) => {
      this.experience = experience;

      (error: any) => {
        console.log(error);
      };
    })
  }

  expandCard(event: any) {
    let htmlFooter = event.srcElement.nextElementSibling;

    if (event.srcElement.classList.contains('expanded')) {
      event.srcElement.classList.remove('expanded')
    } else {
      event.srcElement.classList.add('expanded')
    }

    if (htmlFooter.classList.contains('expanded')) {
      htmlFooter.classList.remove('expanded')
    } else {
      htmlFooter.classList.add('expanded')
    }
  }

  convertTimeToCustomFormat(inputTime: string): string {
    let formattedText;
    const [hours, minutes] = inputTime.split(':').map(part => parseInt(part, 10));

    if (minutes != 0) {
      formattedText = hours + ' h y ' + minutes + ' min'
    } else {
      formattedText = hours + ' h'
    }

    return formattedText;
  }

  getProductRoute() {
    window.open(this.language + '/product/' + this.experience.slug, '_blank');

  }

}

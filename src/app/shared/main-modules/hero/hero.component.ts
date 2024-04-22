import { NgClass, NgIf, NgFor } from '@angular/common';
import { Component, afterNextRender } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageManagerService } from '../../../language-manager.service';
import { ProductsService } from '../products/products.service';
import { ReviewCardComponent } from '../review-card/review-card.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class HeroComponent {
  //base url (localhost)


  language: any;
  cleanUrl: any;

  constructor(public translateService: TranslateService, private languageManager: LanguageManagerService, private router: Router) {

    this.languageManager.currentLanguage$.subscribe(language => {
      this.language = language;
    });

    //base url (localhost)
    afterNextRender(() => {
      this.cleanUrl = window.location.origin;
    });

    this.language = this.translateService.currentLang;
  }



  ngOnInit() {
    this.language = this.translateService.currentLang;
  }

  goToProducts() {
    (document.getElementById("products") as any).scrollIntoView();
  }

  goToProduct() {
    // 'https://tenerifebuggies.com' + this.language + '/product/aventura-por-el-teide-1'

    //window.location.href = 'https://tenerifebuggies.com/' + this.language + '/product/aventura-por-el-teide-1';

    window.open('https://tenerifebuggies.com/' + this.language + '/product/aventura-por-el-teide-1', '_blank')


  }
}


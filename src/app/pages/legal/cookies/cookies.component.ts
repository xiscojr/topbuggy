import { Component, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ProductsService } from '../../../shared/main-modules/products/products.service';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageManagerService } from '../../../language-manager.service';
import { ReviewCardComponent } from '../../../shared/main-modules/review-card/review-card.component';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class CookiesComponent {

  constructor(
    private meta: Meta,
    private title: Title,
    private renderer2: Renderer2
  ) {

  }

  ngOnInit() {
    this.removeMetaTags();
    this.meta.addTags([
      { name: 'robots', content: 'noindex, nofollow' }
    ]);
    this.setTitle('Top Buggy - Cookies');
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

import { Component, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ProductsService } from '../../../shared/main-modules/products/products.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageManagerService } from '../../../language-manager.service';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ReviewCardComponent } from '../../../shared/main-modules/review-card/review-card.component';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class ConditionsComponent {

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
    this.setTitle('Top Buggy - Condiciones');
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

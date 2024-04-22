import { NgClass, NgIf, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageManagerService } from '../../../language-manager.service';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class ReviewCardComponent {
  @Input() review: any;
  showViewMore: boolean = true;

  ngOnInit() {
  }

  formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

  countLines(): number | undefined {
    if (typeof document !== 'undefined') {
      const el = document.getElementById("comments");
      if (el) {
        const divHeight = el.offsetHeight;
        const lines = divHeight / 24;
        return lines;
      }
    }
    return undefined;
  }

  setScrollbarClass() {
    var el = document.getElementById("comments");
    el?.classList.add('scrollable');
  }

}

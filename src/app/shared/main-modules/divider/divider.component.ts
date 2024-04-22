import { NgClass, NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageManagerService } from '../../../language-manager.service';
import { ProductsService } from '../products/products.service';
import { ReviewCardComponent } from '../review-card/review-card.component';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class DividerComponent {

}

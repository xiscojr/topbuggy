import { NgClass, NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageManagerService } from '../../../language-manager.service';
import { ProductsService } from '../../main-modules/products/products.service';
import { ReviewCardComponent } from '../../main-modules/review-card/review-card.component';

@Component({
  selector: 'app-product-booking',
  templateUrl: './product-booking.component.html',
  styleUrls: ['./product-booking.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class ProductBookingComponent {

}

import { NgClass, NgIf, NgFor } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { LanguageManagerService } from '../../../language-manager.service';
import { ProductsService } from '../../main-modules/products/products.service';
import { ReviewCardComponent } from '../../main-modules/review-card/review-card.component';

@Component({
  selector: 'app-product-header-image',
  templateUrl: './product-header-image.component.html',
  styleUrls: ['./product-header-image.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class ProductHeaderImageComponent {

}

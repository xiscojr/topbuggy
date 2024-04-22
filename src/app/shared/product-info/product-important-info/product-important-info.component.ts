import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-important-info',
  templateUrl: './product-important-info.component.html',
  styleUrls: ['./product-important-info.component.scss']
})
export class ProductImportantInfoComponent {
  @Input() productCarryInfo: string[] = [];
}

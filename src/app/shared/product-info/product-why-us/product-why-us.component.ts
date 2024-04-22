import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-why-us',
  templateUrl: './product-why-us.component.html',
  styleUrls: ['./product-why-us.component.scss']
})
export class ProductWhyUsComponent {
  @Input() productWhyUs: string = '';
}

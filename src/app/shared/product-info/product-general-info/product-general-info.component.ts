import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-general-info',
  templateUrl: './product-general-info.component.html',
  styleUrls: ['./product-general-info.component.scss']
})
export class ProductGeneralInfoComponent {
  @Input() productGeneralInfo: any = {};
  week = ['Every day"', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
}

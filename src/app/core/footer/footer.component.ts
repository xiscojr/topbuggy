import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [TranslateModule, RouterLink]
})
export class FooterComponent {
  currentLanguage = 'es';
  constructor(public translateService: TranslateService) {
    setTimeout(() => {
      this.currentLanguage = this.translateService.getDefaultLang();
    }, 1000);
  }
}

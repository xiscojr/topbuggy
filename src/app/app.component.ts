import { Component, DestroyRef, afterNextRender, importProvidersFrom } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLinkActive, RouterLink, ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './core/header/header.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './core/footer/footer.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LanguageManagerService } from './language-manager.service';
import { after } from 'node:test';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    FormBuilder,
    TranslateService,
    LanguageManagerService
  ],
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    TranslateModule,
    FooterComponent,
    RouterLinkActive,
    CommonModule, RouterLink
  ]
})
export class AppComponent {
  title = 'hello-world';
  currentLanguage: any;
  constructor(private languageManager: LanguageManagerService, private route: ActivatedRoute, private translateService: TranslateService, private destroy: DestroyRef) {

    
    afterNextRender(() => {
      this.currentLanguage = this.languageManager.getLanguage();
      let fareharbor = document.getElementsByClassName("fareharbor-calendar-wrap")[0];
      (fareharbor as any).style.display = "none";
    });

   }
  


}


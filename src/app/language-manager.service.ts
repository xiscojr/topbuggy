import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageManagerService {
  currentLanguage: string = 'es';

  private currentLanguageSubject = new BehaviorSubject<string>('es');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor(private router: Router, public translateService: TranslateService) {

    var url = this.router.url;

    // get current language
    this.currentLanguage = url.split('/')[1];

    if(this.currentLanguage == 'es' || this.currentLanguage == 'en' || this.currentLanguage == 'de'){
      this.setLanguage(this.currentLanguage);
    } else {
      this.setLanguage('es');
    }


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentLanguage = event.url.split('/')[1]; // Obtener el idioma de la ruta

        if(this.currentLanguage == 'es' || this.currentLanguage == 'en' || this.currentLanguage == 'de'){
          this.setLanguage(this.currentLanguage);
        } else {
          this.setLanguage('es');
        }

      }
    });


  }


  getLanguage() {

    this.currentLanguage = this.translateService.currentLang ? this.translateService.currentLang : this.currentLanguageSubject.value;

    return this.currentLanguage;
  }

  setLanguage(language: string) {
    this.translateService.use(language);
    this.translateService.setDefaultLang(language);
    
    this.translateService.currentLang = language;
    this.currentLanguageSubject.next(language);
    this.currentLanguage = language;

  }




}

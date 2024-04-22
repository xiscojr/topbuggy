import { Component, EventEmitter, HostBinding, Inject, Output, afterNextRender } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageManagerService } from '../../language-manager.service';
import { after } from 'node:test';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [TranslateModule, RouterLink],
  providers: [TranslateService],
  standalone: true
})
export class HeaderComponent {
  @HostBinding('style.background-color') backgroundColor = '#0C5C75';
  language: any = 'es';
  match: any;
  pattern: any;
  mainLanguages = ['es', 'en', 'de'];

  langRoute: any;
  actualRoute: any;

  constructor(public languageManager: LanguageManagerService, public translateService: TranslateService, private route: ActivatedRoute, private router: Router) {
    
  }




  ngOnInit() {

    this.languageManager.currentLanguage$.subscribe(language => {
      this.language = language;

      this.langRoute = this.router.url;
      this.actualRoute = this.router.url;


      this.langRoute = this.langRoute.replace('/es', '');
      this.langRoute = this.langRoute.replace('/en', '');
      this.langRoute = this.langRoute.replace('/de', '');

      //Remove Id's from URL #any
      this.langRoute = this.langRoute.replace(/#.*$/, '');
      
    });
   
  }





  @Output() eventoLang = new EventEmitter();
  useLang(language: string) {
    

    this.languageManager.setLanguage(language);
    this.language = language;
    this.eventoLang.emit(this.language);

    if (this.actualRoute.includes('product')) {
      // this.router.navigate([language+'/' + this.langRoute]);
      console.log('reload, includes product');
      window.location.href = language + this.langRoute;
      // this.router.navigate([this.router.url]);
    }
  }
}

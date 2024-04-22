import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactFormComponent } from '../../shared/contact/contact-form/contact-form.component';
import { LanguageManagerService } from '../../language-manager.service';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  providers: [],
  imports: [
    ContactFormComponent
  ]
})

export class ContactComponent implements OnInit {
  constructor(private route: ActivatedRoute, private languageManager: LanguageManagerService,
    private title: Title,
    private meta: Meta,
    private translateService: TranslateService,
    ) { 

    this.languageManager.currentLanguage$.subscribe(language => {

      this.changeTagsByLanguage(language);
    });

  }

  ngOnInit() {
    this.changeTagsByLanguage(this.translateService.currentLang);
  }

  changeTagsByLanguage(language: any) {

    var webUrl = 'https://tenerifebuggies.com/' + this.translateService.currentLang + '/contact';
    

    switch (language) {
      case 'es':
        this.title.setTitle('Contacto | Top Buggy Adventure');
        this.meta.updateTag({ name: 'description', content: 'Empieza tu adventura en buggy en Tenerife. Tenemos las mejores actividades en Tenerife en buggies de 2 o 4 plazas. Rellena nuestro formulario y contacta.' });
        this.meta.updateTag({ property: 'og:title', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ property: 'og:description', content: 'Empieza tu adventura en buggy en Tenerife. Tenemos las mejores actividades en Tenerife en buggies de 2 o 4 plazas. Rellena nuestro formulario y contacta.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://tenerifebuggies.com/assets/images/hero-background.png' });
        this.meta.updateTag({ property: 'og:url', content: webUrl });
        this.meta.updateTag({ property: 'og:site_name', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ name: 'lang', content: language });
        break;

      case 'en':
        this.title.setTitle('Contact | Top Buggy Adventure');
        this.meta.updateTag({ name: 'description', content: 'Start your buggy adventure in Tenerife. We have the best activities in Tenerife in 2 or 4-seater buggies. Fill out our form and contact us.' });
        this.meta.updateTag({ property: 'og:title', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ property: 'og:description', content: 'Start your buggy adventure in Tenerife. We have the best activities in Tenerife in 2 or 4-seater buggies. Fill out our form and contact us.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://tenerifebuggies.com/assets/images/hero-background.png' });
        this.meta.updateTag({ property: 'og:url', content: webUrl });
        this.meta.updateTag({ property: 'og:site_name', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ name: 'lang', content: language });
        break;

      case 'de':
        this.title.setTitle('Kontakt | Top Buggy Adventure');
        this.meta.updateTag({ name: 'description', content: 'Beginnen Sie Ihr Buggy-Abenteuer auf Teneriffa. Wir bieten die besten Aktivitäten auf Teneriffa in 2- oder 4-Sitzer-Buggys an. Füllen Sie unser Formular aus und kontaktieren Sie uns.' });
        this.meta.updateTag({ property: 'og:title', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ property: 'og:description', content: 'Beginnen Sie Ihr Buggy-Abenteuer auf Teneriffa. Wir bieten die besten Aktivitäten auf Teneriffa in 2- oder 4-Sitzer-Buggys an. Füllen Sie unser Formular aus und kontaktieren Sie uns.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://tenerifebuggies.com/assets/images/hero-background.png' });
        this.meta.updateTag({ property: 'og:url', content: webUrl });
        this.meta.updateTag({ property: 'og:site_name', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ name: 'lang', content: language });
        break;

      default:
        this.title.setTitle('Contacto | Top Buggy Adventure');
        this.meta.updateTag({ name: 'description', content: 'Empieza tu adventura en buggy en Tenerife. Tenemos las mejores actividades en Tenerife en buggies de 2 o 4 plazas. Rellena nuestro formulario y contacta.' });
        this.meta.updateTag({ property: 'og:title', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ property: 'og:description', content: 'Empieza tu adventura en buggy en Tenerife. Tenemos las mejores actividades en Tenerife en buggies de 2 o 4 plazas. Rellena nuestro formulario y contacta.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://tenerifebuggies.com/assets/images/hero-background.png' });
        this.meta.updateTag({ property: 'og:url', content: webUrl });
        this.meta.updateTag({ property: 'og:site_name', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ name: 'lang', content: language });
        break;
    }
  }
}

import { Component, Renderer2, afterNextRender } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProductComponent } from '../product/product.component';
import { LanguageManagerService } from '../../language-manager.service';
import { AboutUsComponent } from '../../shared/main-modules/about-us/about-us.component';
import { CtaComponent } from '../../shared/main-modules/cta/cta.component';
import { DividerComponent } from '../../shared/main-modules/divider/divider.component';
import { FaqComponent } from '../../shared/main-modules/faq/faq.component';
import { HeroComponent } from '../../shared/main-modules/hero/hero.component';
import { InfoComponent } from '../../shared/main-modules/info/info.component';
import { ProductsComponent } from '../../shared/main-modules/products/products.component';
import { ReviewsComponent } from '../../shared/main-modules/reviews/reviews.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    AboutUsComponent,
    HeroComponent,
    CtaComponent,
    DividerComponent,
    ReviewsComponent,
    FaqComponent,
    InfoComponent,
    ProductComponent,
    ProductsComponent
  ]
})
export class HomeComponent {

  language: any;
  match: any;
  pattern: any;
  mainLanguages = ['es', 'en', 'de']

  constructor(
    private meta: Meta,
    private title: Title,
    private renderer2: Renderer2,
    private router: Router,
    public translateService: TranslateService,
    public languageManager: LanguageManagerService
  ) {

    this.languageManager.currentLanguage$.subscribe(language => {
      this.language = language;

      this.changeTagsByLanguage(this.language);
    });


  }


  changeTagsByLanguage(language: any) {

    switch (language) {
      case 'es':
        this.title.setTitle('Inicio | Top Buggy Adventure: Recorre las mejores localidades de Tenerife');
        this.meta.updateTag({ name: 'description', content: 'Conoce las rutas de Top Buggy Adventure en Tenerife. Disfruta de la esencia de Tenerife con nuestros buggies de 2 o 4 plazas y nuestras distintas rutas por el Teide y el Tenerife Sur. ' });
        this.meta.updateTag({ property: 'og:title', content: 'Top Buggy Adventure: Recorre las mejores localidades de Tenerife' });
        this.meta.updateTag({ property: 'og:description', content: 'Conoce las rutas de Top Buggy Adventure en Tenerife. Disfruta de la esencia de Tenerife con nuestros buggies de 2 o 4 plazas y nuestras distintas rutas por el Teide y el Tenerife Sur. ' });
        this.meta.updateTag({ property: 'og:image', content: 'https://tenerifebuggies.com/Conduciendo.61c3e1ba0815208b.png' });
        this.meta.updateTag({ property: 'og:url', content: 'https://tenerifebuggies.com/es' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ rel: 'canonical', href: 'https://tenerifebuggies.com/es' });
        break;
      case 'en':
        this.title.setTitle('Home | Top Buggy Adventure');
        this.meta.updateTag({ name: 'description', content: 'Get to know the Top Buggy Adventure routes in Tenerife. Enjoy the essence of Tenerife with our 2 or 4-seater buggies and our different routes through Teide and Tenerife South.' });
        this.meta.updateTag({ property: 'og:title', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ property: 'og:description', content: 'Get to know the Top Buggy Adventure routes in Tenerife. Enjoy the essence of Tenerife with our 2 or 4-seater buggies and our different routes through Teide and Tenerife South.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://tenerifebuggies.com/Conduciendo.61c3e1ba0815208b.png' });
        this.meta.updateTag({ property: 'og:url', content: 'https://tenerifebuggies.com/en' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ rel: 'canonical', href: 'https://tenerifebuggies.com/en' });
        break;
      case 'de':
        this.title.setTitle('Startseite | Top Buggy Adventure');
        this.meta.updateTag({ name: 'description', content: 'Lernen Sie die besten Buggy-Abenteuerrouten auf Teneriffa kennen. Genießen Sie die Essenz Teneriffas mit unseren 2- oder 4-Sitzer-Buggys und unseren verschiedenen Routen durch den Teide und den Süden Teneriffas.' });
        this.meta.updateTag({ property: 'og:title', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ property: 'og:description', content: 'Lernen Sie die besten Buggy-Abenteuerrouten auf Teneriffa kennen. Genießen Sie die Essenz Teneriffas mit unseren 2- oder 4-Sitzer-Buggys und unseren verschiedenen Routen durch den Teide und den Süden Teneriffas.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://tenerifebuggies.com/Conduciendo.61c3e1ba0815208b.png' });
        this.meta.updateTag({ property: 'og:url', content: 'https://tenerifebuggies.com/de' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ rel: 'canonical', href: 'https://tenerifebuggies.com/de' });

        break;

      default:

        this.title.setTitle('Inicio | Top Buggy Adventure');
        this.meta.updateTag({ name: 'description', content: 'Conoce las rutas de Top Buggy Adventure en Tenerife. Disfruta de la esencia de Tenerife con nuestros buggies de 2 o 4 plazas y nuestras distintas rutas por el Teide y el Tenerife Sur. ' });
        this.meta.updateTag({ property: 'og:title', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ property: 'og:description', content: 'Conoce las rutas de Top Buggy Adventure en Tenerife. Disfruta de la esencia de Tenerife con nuestros buggies de 2 o 4 plazas y nuestras distintas rutas por el Teide y el Tenerife Sur. ' });
        this.meta.updateTag({ property: 'og:image', content: 'https://tenerifebuggies.com/Conduciendo.61c3e1ba0815208b.png' });
        this.meta.updateTag({ property: 'og:url', content: 'https://tenerifebuggies.com/' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Top Buggy Adventure' });
        this.meta.updateTag({ rel: 'canonical', href: 'https://tenerifebuggies.com/es' });

        //Add canonical link to the head
        this.meta.addTag({ rel: 'canonical', href: 'https://tenerifebuggies.com/es' });

        break;
    }


  }

}

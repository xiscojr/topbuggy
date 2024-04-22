import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LanguageManagerService } from './language-manager.service';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return  new  TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}



export const appConfig: ApplicationConfig = {
  providers: [
    LanguageManagerService,
    provideAnimations(), 
    provideHttpClient(withFetch()), 
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'es',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    
    ]
};

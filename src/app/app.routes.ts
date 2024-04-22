import { RouterModule, Routes } from '@angular/router';
//import { WorkComponent } from './work/work.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConditionsComponent } from './pages/legal/conditions/conditions.component';
import { CookiesComponent } from './pages/legal/cookies/cookies.component';
import { PrivacyComponent } from './pages/legal/privacy/privacy.component';
import { ProductComponent } from './pages/product/product.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
 
  { path: '', pathMatch: 'full', redirectTo: 'es'},
  { path: '', component: HomeComponent },
  { path: 'es', component: HomeComponent },
  { path: 'en', component: HomeComponent },
  { path: 'de', component: HomeComponent },
  { path: ':language/conditions', component: ConditionsComponent },
  { path: ':language/cookies', component: CookiesComponent },
  { path: ':language/privacy', component: PrivacyComponent },
  { path: ':language/contact', component: ContactComponent },
  { path: ':language/product/:slug', component: ProductComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }
  )],
})
export class AppRoutingModule { }
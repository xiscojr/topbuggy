import { NgClass, NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageManagerService } from '../../../language-manager.service';
import { ProductsService } from '../products/products.service';
import { ReviewCardComponent } from '../review-card/review-card.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
  providers: [ProductsService, TranslateService, LanguageManagerService],
  imports: [TranslateModule, RouterLink, NgClass, NgIf, NgFor, ReviewCardComponent]
})
export class FaqComponent {

  constructor(){

  }

  ngOnInit(){
    
  }

  changeParentClass(event: any) {
    //Target the parent element
    let parent = event.srcElement.parentElement.parentElement;
    let aux = false;

    if (parent.classList.contains('selected-tab')){
      aux = true;
    }

    //Remove the class from every tab
    Array.from(parent.parentElement.children).forEach(function (element: any) {
      element.classList.remove('selected-tab');
    });

    //Duality for
    if (aux) {
      parent.classList.remove('selected-tab')
    } else {
      parent.classList.add('selected-tab')
    }
  }
}

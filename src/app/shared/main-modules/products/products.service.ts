import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { };


  public getMakerBySlug(language: string): Observable<any> {
    const URI = 'https://api.venntur.com/makers?slug=top-buggy-adventure';
    return this.http.get(URI, {
      headers: {
        'Accept-Language': language
      }
    });
  }

  public getMakerById(language: string): Observable<any> {
    const URI = 'https://api.venntur.com/makers?id=1556b08a-9a6c-11ee-96b3-0a30d442b088';
    return this.http.get(URI, {
      headers: {
        'Accept-Language': language
      }
    });
  }

  public getExperience(id: string, language: string): Observable<any> {
    const URI = 'https://api.venntur.com' + id
    return this.http.get(URI, {
      headers: {
        'Accept-Language': language
      }
    });
  }

  public getExperienceByMakerId(language: string): Observable<any> {
    const URI = 'https://api.venntur.com/experiences?maker.id=1556b08a-9a6c-11ee-96b3-0a30d442b088'
    return this.http.get(URI, {
      headers: {
        'Accept-Language': language
      }
    });
  }

  public getExperienceBySlug(slug: string, language: string): Observable<any> {
    const URI = 'https://api.venntur.com/experiences?slug=' + slug
    return this.http.get(URI, {
      headers: {
        'Accept-Language': language
      }
    });
  }

  public sendEmail(contactForm: any) {
    return this.http.post('https://api.venntur.com/send_contact_form', contactForm);
  }

  public getMakerReviews(idArray: string[], language: string = 'es'): Observable<any> {
    let requestURL = 'https://api.venntur.com/reviews?product.id[]=';

    idArray.forEach((id, index) => {
      id = id.replace('/experiences/', '')

      if (index == 0) {
        requestURL = requestURL + id
      } else {
        requestURL = requestURL + '&product.id[]=' + id
      }
      requestURL = requestURL + '&status=validated'
    });


    return this.http.get(requestURL, {
      headers: {
        'Accept-Language': language
      }
    });
  }
}

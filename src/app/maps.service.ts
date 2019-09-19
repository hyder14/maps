import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) {  }

   getLocation(): Observable<any> {
    return new Observable (
      (observer) => {
        navigator.geolocation.getCurrentPosition (
          success => {
            observer.next(success);
            observer.complete();
          },
          error => {
            observer.error(error);
          }
        );
    });
   }

}

import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('Agüita!');

  constructor() {
    // Subject & BehaviorSubject
    setTimeout( () => {
      this.myObservable1$.next('Agüita! X2');
    }, 1000);

    setTimeout( () => {
      this.myObservable1$.error('Ya no agüita :c');
    }, 3000);

    // Observable
    // this.myObservable1$ = new Observable(
    //   ( observer: Observer<any> ) => {
    //     observer.next('Agüita!');

    //     setTimeout( () => {
    //       observer.error('Ya no agüita :c')
    //     }, 3000);
    //   }
    // );
  }
}

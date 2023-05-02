import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private navBarActive: boolean = false;
  private navBarSubject = new Subject<boolean>();

  private isLoading$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  //NAVBAR
  isActive(): Observable<boolean> {
    return this.navBarSubject.asObservable();
  }

  setNavBar() {
    this.navBarActive = !this.navBarActive;
    return this.navBarSubject.next(this.navBarActive)
  }

  //LOADER
  startLoading() {
    this.isLoading$.next(true);
  }

  stopLoading() {
    setTimeout(()=>{
    this.isLoading$.next(false);
    }, 250)
  }

  getIsLoading() {
    return this.isLoading$.asObservable();
  }

}

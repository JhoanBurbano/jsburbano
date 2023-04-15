import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private navBarActive: boolean = false;

  private navBarSubject = new Subject<boolean>();

  constructor() { }

  isActive(): Observable<boolean> {
    return this.navBarSubject.asObservable();
  }

  setNavBar() {
    this.navBarActive = !this.navBarActive;
    return this.navBarSubject.next(this.navBarActive)
  }

}

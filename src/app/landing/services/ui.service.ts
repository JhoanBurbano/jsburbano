import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private navBarActive: boolean = false;
  private navBarSubject = new Subject<boolean>();

  private isLoading$ = new BehaviorSubject<boolean>(false);
  private progress$ = new BehaviorSubject<number>(0);
  private intervalId : any;

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
  startLoading(timeToShow: number) {
    this.isLoading$.next(true);
    // let progress = 0;
    // this.intervalId = setInterval(() => {
    //   progress += 10;
    //   if (progress >= timeToShow) {
    //     clearInterval(this.intervalId);
    //     this.isLoading$.next(false);
    //     console.log('intervalId', this.intervalId)
    //   }
    // }, timeToShow);
    let progress = 0
    this.intervalId = setInterval(()=>{
      progress++
      if(progress=== timeToShow){
        clearInterval(this.intervalId);
        this.isLoading$.next(false);
      }
      console.log('progress', progress)
         this.progress$.next(progress);
    }, 1)
  }

  stopLoading() {
    this.isLoading$.next(false);
    this.progress$.next(0);
  }

  getIsLoading() {
    return this.isLoading$.asObservable();
  }

  getProgress() {
    return this.progress$.asObservable();
  }

}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import {  fromEvent, interval, Observable, of } from 'rxjs';
import { buffer, filter, map, tap,bufferCount, takeLast, take, takeUntil, delayWhen, materialize, defaultIfEmpty, every, find, first, findIndex, isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  title = "rxjs-basics";
  intervalData: number[]=[];
  showData$!: Observable<Event>;
  showDataUntil$!: Observable<Event>;



  constructor(){
  }
  ngAfterViewInit(): void {
    this.showData$ = fromEvent(document.getElementById('showButton')!, 'click');
    this.showDataUntil$ = fromEvent(document.getElementById('takeUntil')!, 'click');
  }
  ngOnInit(): void {
   const newObservable = interval(1000);
  }

  source$= new Observable((observer)=>{
    observer.next();
    setTimeout(()=>{
      observer.next();
      observer.complete();
    }, 4000)
  })

  startTimer(){
    const array=[1,2,3,4,5,6,7]
    const obsof1=of(1,2,3,4,5,6,7);
   
   this.source$.
    pipe(
      isEmpty()
      )
   .subscribe(
      (data)=>{console.log(data)}, 
      (error)=>{console.log(error)}, 
      ()=>{console.log("complete")}
      
      )

  }


  startInterval() {
    interval(1000)
      .pipe(
        takeUntil(this.showData$)
      )
      .subscribe((data) => {
       console.log(data)
      });
  }

}

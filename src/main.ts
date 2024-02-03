import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { concatMap, delay, mergeMap, of, range, switchMap } from 'rxjs';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ``,
})
export class App implements OnInit {
  ngOnInit() {
    range(1, 5)
      .pipe(concatMap((i) => of(i).pipe(delay(this.randomDelay()))))
      .subscribe((v) => console.log('concatMap: ', v));

    range(1, 5)
      .pipe(mergeMap((i) => of(i).pipe(delay(this.randomDelay()))))
      .subscribe((v) => console.log('mergeMap:', v));

    range(1, 5)
      .pipe(switchMap((i) => of(i).pipe(delay(this.randomDelay()))))
      .subscribe((v) => console.log('switchMap:', v));
  }

  randomDelay() {
    return Math.floor(Math.random() * 1000) + 500;
  }
}

bootstrapApplication(App);

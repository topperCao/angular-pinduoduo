import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountDownComponent implements OnInit {
  @Input() startDate = new Date();
  @Input() futureDate: Date;
  private _MS_PER_SECOND = 1000;

  countDown$: Observable<string>;

  constructor() {}

  ngOnInit() {
    this.countDown$ = this.getCountDownObservable(
      this.startDate,
      this.futureDate
    );
  }

  private getCountDownObservable(startDate: Date, futureDate: Date) {
    return interval(1000).pipe(
      map(elapse => this.diffInSec(startDate, futureDate) - elapse),
      takeWhile(gap => gap >= 0),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60)
      })),
      map(({ hour, minute, second }) => `${hour}:${minute}:${second}`)
    );
  }

  private diffInSec = (start: Date, future: Date): number => {
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff / this._MS_PER_SECOND);
  }
}

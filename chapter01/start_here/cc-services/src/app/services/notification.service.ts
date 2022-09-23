import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private count = new BehaviorSubject<number>(100);

  count$: Observable<number> = this.count.asObservable();
  constructor() {}

  setCount(countVal: number) {
    this.count.next(countVal);
  }
}

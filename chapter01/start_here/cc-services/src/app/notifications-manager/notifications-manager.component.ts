import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss'],
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$: Observable<number>;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationService.count$;
  }

  getCountValue(callback) {
    this.notificationsCount$.pipe(first()).subscribe(callback);
  }

  addNotification() {
    this.getCountValue((countValue) => {
      this.notificationService.setCount(++countValue);
    });
  }

  removeNotification() {
    this.getCountValue((countValue) => {
      if (countValue === 0) {
        return;
      }
      this.notificationService.setCount(--countValue);
    });
  }

  resetCount() {
    this.notificationService.setCount(0);
  }
}

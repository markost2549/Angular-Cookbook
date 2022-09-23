import { Observable } from 'rxjs';
import { NotificationService } from './../services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss'],
})
export class NotificationsButtonComponent implements OnInit {
  count$: Observable<number>;

  constructor(private notificaionService: NotificationService) {}

  ngOnInit(): void {
    this.count$ = this.notificaionService.count$;
  }
}

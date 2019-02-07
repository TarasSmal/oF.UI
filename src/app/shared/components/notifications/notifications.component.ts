import {
  Component,
  OnInit,
  OnDestroy,
  Renderer,
} from '@angular/core';
import { Notification } from './notification.interface';
import { NotificationsService } from '../../../core/services/application/notifications.service';

@Component({
  selector: 'app-notifications',
  styleUrls: ['./_notification.component.scss'],
  template: `
    <div class="app-notifications-wrapper">
      <app-notification
          *ngFor="let a of notifications"
          [item]="a"
          [timeOut]="timeOut"
          [isDeleted]="a.isDeleted"
          >
      </app-notification>
    </div>
    `,
})
export class NotificationsComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];

  // Autoclose timeout
  timeOut = 5000;

  // global listener - in our case lister for global click event
  // tslint:disable-next-line:ban-types
  private globalListenFunc: Function;

  // Event emitter listener
  private listener: any;

  // Minimal time before closing
  private minTimeout = 500;

  constructor(
    private service: NotificationsService,
    private renderer: Renderer,
  ) {}

  ngOnInit() {
    // Listen for changes in the service
    this.listener = this.service.getChangeEmitter()
      .subscribe(item => {
        switch (item.command) {
          case 'cleanAll':
            this.notifications = [];
            break;

          case 'set':
            if (item.add)  {
              this.add(item.notification);
            } else {
              this.defaultBehavior(item);
            }
            break;

          default:
            this.defaultBehavior(item);
            break;
        }
      });
  }

  // Default behavior on event
  defaultBehavior(value) {
    this.notifications.splice(this.notifications.indexOf(value.notification), 1);

    if (this.notifications.length === 0) {
      this.clearGlobalListener();
    }
  }

  // Add the new notification to the notification array
  add(item) {
    item.createdOn = new Date();
    item.isDeleted = false;
    this.notifications.splice(0, 0, item);

    if (!this.globalListenFunc) {
      // We cache the function "listenGlobal" returns
      this.globalListenFunc = this.renderer.listenGlobal('document', 'click', () => {
        const now = +new Date();

        this.notifications.forEach((notification) => {
          if (now - +notification.createdOn > this.minTimeout) {
            notification.isDeleted = true;
          }
        });

        this.clearGlobalListener();
      });
    }
  }

  /**
   * Remove global listener and reset another options
   */
  clearGlobalListener() {
    // remove global listener
    if (this.globalListenFunc) {
      this.globalListenFunc();
    }

    this.globalListenFunc = undefined;
  }

  /**
   * On destroy clear memory to avoid memory leaks
   */
  ngOnDestroy() {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }
}

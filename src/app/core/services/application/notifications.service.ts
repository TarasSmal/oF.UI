import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationEvent } from '../../../shared/components/notifications/notification-event.interface';
import { Notification } from '../../../shared/components/notifications/notification.interface';

@Injectable()
export class NotificationsService {
  private emitter$ = new Subject<NotificationEvent>();

  set(notification: Notification, to: boolean) {
    // tslint:disable-next-line:object-literal-shorthand
    this.emitter$.next({ command: 'set', notification: notification, add: to });
    return notification;

  }

  getChangeEmitter() {
    return this.emitter$;
  }

  // Access methods
  info(title: string) {
    // tslint:disable-next-line:object-literal-shorthand
    return this.set({ title: title, type: 'info' }, true);
  }

  // Remove all notifications method
  remove() {
    this.emitter$.next({ command: 'cleanAll' });
  }

  /**
   * For the current moment, it's a simple wrapper around browser confirm implementation.
   * @param {string} message
   * @returns {Promise<any>}
   */
  confirm(message: string): Promise<undefined> {
    return new Promise((resolve, reject) => {
      if (confirm(message)) {
        resolve();
      } else {
        reject();
      }
    });
  }
}

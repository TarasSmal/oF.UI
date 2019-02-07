import { Injectable } from '@angular/core';

@Injectable()
export class NotificationsServiceStub {
  set(notification: Notification, to: boolean) {
    return {};
  }

  getChangeEmitter() {
    return {};
  }

  info(title: string) {
    return {};
  }

  remove() {
    return {};
  }
}

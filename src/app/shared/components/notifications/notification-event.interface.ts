import { Notification } from './notification.interface';

export interface NotificationEvent {
  add?: boolean;
  command: string;
  notification?: Notification;
}

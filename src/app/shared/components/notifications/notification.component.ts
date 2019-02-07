import { Component, OnInit, OnDestroy, Input, NgZone, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Notification } from './notification.interface';
import { NotificationsService } from '../../../core/services/application/notifications.service';

@Component({
  selector: 'app-notification',
  animations: [
    trigger('enterLeave', [
      state('fromTop', style({ transform: 'translateY(0)' })),
      transition('void => fromTop', [
        style({ transform: 'translateY(-100%)' }),
        animate('.3s ease-out'),
      ]),
      state('scaleOut', style({
        opacity: '0',
        transform: 'scale(0)',
      })),
      transition('* => scaleOut', [
        style({
          opacity: '1',
          transform: 'scale(1)',
        }),
        animate('.2s ease-in'),
      ]),
    ]),
  ],
  templateUrl: './notification.component.html',
})

export class NotificationComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  item: Notification;

  @Input()
  timeOut: number;

  @Input() isDeleted: boolean;

  private timer: any;

  constructor(
    private service: NotificationsService,
    private ngZone: NgZone,
  ) {}

  ngOnInit() {
    this.item.state = 'fromTop';

    if (this.timeOut !== 0) {
      this.ngZone.runOutsideAngular(() => {
        this.timer = setTimeout(this.instance, this.timeOut);
      });
    }
  }

  /**
   * Clear memory on destroy event
   */
  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  /**
   * On changes input data check whether removed item is or not
   */
  ngOnChanges() {
    if (this.isDeleted) {
      this._remove();
    }
  }

  private instance = () => {
    this._remove();
  }

  /**
   * Show remove animation and remove from DOM then
   * @private
   */
  private _remove() {
    this.ngZone.run(() => {
      this.item.state = 'scaleOut';
      setTimeout(() => this.service.set(this.item, false), 310);
    });
  }
}

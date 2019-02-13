import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './components/notifications/notification.component';
import { Notification } from './components/notifications/notification.interface';
import { LetDirective } from './directive/let.directive';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NotificationComponent,
    LetDirective,
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    NotificationComponent,
    LetDirective,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class SharedModule { }

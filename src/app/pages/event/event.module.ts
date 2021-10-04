import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventRoutingModule} from './event-routing.module';
import {EventComponent} from './event.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EventComponent
  ],
    imports: [
        CommonModule,
        EventRoutingModule,
        ReactiveFormsModule
    ]
})
export class EventModule {
}

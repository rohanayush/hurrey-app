import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoomRoutingModule } from './room-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameFormComponent } from './name-form/name-form.component';
import { AvatarFormComponent } from './avatar-form/avatar-form.component';
import { CreateRoomFormComponent } from './create-room-form/create-room-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoadingComponent,
    NameFormComponent,
    AvatarFormComponent,
    CreateRoomFormComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class RoomModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoomRoutingModule } from './room-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameFormComponent } from './name-form/name-form.component';
import { AvatarFormComponent } from './avatar-form/avatar-form.component';
import { CreateRoomFormComponent } from './create-room-form/create-room-form.component';
import { JoinRoomFormComponent } from './join-room-form/join-room-form.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlayersNumberOnlyDirective } from './directive/PlayerNumbersOnly.directive';
import { NumbersOnlyDirective } from './directive/NumbersOnly.directive';
import { LettersOnlyDirective } from './directive/LettersOnly.directive';

@NgModule({
  declarations: [
    HomeComponent,
    LoadingComponent,
    NameFormComponent,
    AvatarFormComponent,
    CreateRoomFormComponent,
    JoinRoomFormComponent,
    PlayersNumberOnlyDirective,
    NumbersOnlyDirective,
    LettersOnlyDirective
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports:[
    HomeComponent
  ]
})
export class RoomModule { }

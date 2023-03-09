import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomModule } from './../app/room/room.module';
import { RoomService } from './room/service/room.service';

const routes: Routes = [
  {
    path:'room',
    loadChildren: ()=> import('./../app/room/room.module').then( m => m.RoomModule)
  },
  { path: '',   redirectTo: '/room', pathMatch: 'full' },
  { path: '**', redirectTo:'/room' },
];

@NgModule({
  imports: [RoomModule ,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

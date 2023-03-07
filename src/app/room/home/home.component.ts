import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loading: boolean | undefined = true;

  nameForm: FormGroup | undefined;
  avatarForm: FormGroup | undefined;
  createRoomForm: FormGroup | undefined;
  joinRoomForm:FormGroup | undefined;

  state: number = 1;
  usrName: string = '';
  avatarImg: string = '';
  create:boolean=false;
  join:boolean=false;

  constructor(private formBuilder: FormBuilder) {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  ngOnInit() {
    this.nameForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    this.avatarForm = this.formBuilder.group({
      avatar: ['', Validators.required],
    });
    this.createRoomForm = this.formBuilder.group({
      roomName: ['', Validators.required],
      playersNum: ['', Validators.required],
    });
    this.joinRoomForm = this.formBuilder.group({
      roomCode: ['', Validators.required]
    });

    this.nameForm.valueChanges.subscribe((change: any) => {
      console.log('changed name to : ' + change.name);
      this.usrName = change.name;
    });
    this.avatarForm.valueChanges.subscribe((change: any) => {
      console.log('changed avatar : ' + change.avatar);
      this.avatarImg = change.avatar;
    });
    this.createRoomForm.valueChanges.subscribe((change: any) => {
      console.log('changed roo name : ' + change.roomName);
      console.log('changed players : ' + change.playersNum);
    });
    this.joinRoomForm.valueChanges.subscribe((change: any) => {
      console.log('changed code : ' + change.roomCode);
    });
  }

  next() {
    this.state++;
    console.log(this.state);
  }

  previous() {
    this.state--;
  }

  createRoom() {
    this.create=true;
    this.join=false;

  }

  joinRoom(){
    this.join=true;
    this.create=false;
  }

  submit(ev: any) {
    console.log('from home: ', ev);
  }

}

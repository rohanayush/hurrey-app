import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  creditCardValidator,
  cvvValidator,
} from '../validators/creditCards.validator';
import { numberValidator } from './../validators/numberValidator';
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
  joinRoomForm: FormGroup | undefined;
  roomCode: number | undefined;
  state: number = 1;
  usrName: string = '';
  avatarImg: string = '';
  create: boolean = false;
  join: boolean = false;
  page: boolean = false;

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
      playersNum: [
        '',
        [
          numberValidator(),
          Validators.required,
          Validators.min(1),
          Validators.max(6),
          Validators.maxLength(1),
        ],
      ],
      creditCardNumber: ['', [numberValidator(),Validators.required, creditCardValidator]],
      cvv: ['', [ numberValidator(),cvvValidator,Validators.required,]],
    });
    this.joinRoomForm = this.formBuilder.group({
      roomCode: [
        '',
        [
          numberValidator(),
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(6),
        ],
      ],
    });

    this.nameForm.valueChanges.subscribe((change: any) => {
      this.usrName = change.name;
    });
    this.avatarForm.valueChanges.subscribe((change: any) => {
      this.avatarImg = change.avatar;
    });
  }

  next() {
    this.state++;
  }

  previous() {
    if (this.join) {
      this.join = false;
      this.create = false;
      this.state = 3;
    } else if (this.create) {
      this.create = false;
      this.join = false;
      this.state = 3;

      // this.avatarForm?.reset();
    } else if (this.state > 1) {
      if (this.state <= 3) {
        this.avatarForm?.reset();
      }
      this.state--;

      // this.avatarForm?.reset();
    }
  }

  createRoom() {
    this.create = true;
    this.join = false;
    this.state++;
  }

  joinRoom() {
    this.join = true;
    this.create = false;
    this.state++;
  }

  createPage() {
    this.create = false;
    this.page = true;
    this.roomCode = Math.floor(Math.random() * 900000) + 100000;
  }
}

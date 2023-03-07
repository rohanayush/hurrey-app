import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join-room-form',
  templateUrl: './join-room-form.component.html',
  styleUrls: ['./join-room-form.component.scss']
})
export class JoinRoomFormComponent {
  @Input() form:FormGroup | undefined;
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();

  nextStep(){
    this.next.emit();
  }

  previousStep(){
    this.previous.emit();
  }
}

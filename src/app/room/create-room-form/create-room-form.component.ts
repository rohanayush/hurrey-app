import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-room-form',
  templateUrl: './create-room-form.component.html',
  styleUrls: ['./create-room-form.component.scss']
})
export class CreateRoomFormComponent {
  @Input() form:FormGroup | undefined;
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();


  nextStep(){
    this.next.emit();
  }
}

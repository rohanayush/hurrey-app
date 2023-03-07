import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss']
})
export class NameFormComponent {

  @Input() form:FormGroup | undefined;
  @Output() next = new EventEmitter();

  nextStep(){
    this.next.emit();
  }
}

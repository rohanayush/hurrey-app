import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Utils from '../Utils/avatar';

@Component({
  selector: 'app-avatar-form',
  templateUrl: './avatar-form.component.html',
  styleUrls: ['./avatar-form.component.scss']
})
export class AvatarFormComponent {
  @Input() form:FormGroup | undefined;
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();
  @Output() submit = new EventEmitter();
  avatars:any;
  isChecked:Boolean=false;
  id:number=-1;
  proceed:boolean=true;
  

  constructor(){
    this.avatars = Utils.getAvatarDetails() as any;
  }

  ngOnInit(){
  }
  nextStep(){
    this.next.emit();
  }

  previousStep(){
    this.previous.emit();
  }
  submitForm(){
    this.submit.emit(this.form?.value);
  }

  trackChange(ev:any,i:number){
     this.id=i;
     this.proceed=false;
     sessionStorage.setItem('id',String(this.id));
  }
}

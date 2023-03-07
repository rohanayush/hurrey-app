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
    console.log(this.avatars)
  }

  ngOnInit(){
    this.form?.valueChanges.subscribe(
      (a)=> console.log("value of avatar",a.avatar)
    )
  }
  nextStep(){
    this.next.emit();
  }

  previousStep(){
    this.previous.emit();
  }
  submitForm(){
    console.log("On submit",this.form?.value)
    this.submit.emit(this.form?.value);
  }

  trackChange(ev:any,i:number){
    console.log(ev)
     this.id=i;
     this.proceed=false;

  }
}

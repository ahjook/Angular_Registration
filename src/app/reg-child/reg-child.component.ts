import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';
import { personInfo } from '../registration/model'; 

@Component({
  selector: 'app-reg-child',
  templateUrl: './reg-child.component.html',
  styleUrls: ['./reg-child.component.css']
})
export class RegChildComponent implements OnInit {
  @Input() people: Array<personInfo>;
  index: number;
  @Output() personEvent= new EventEmitter();
  public personInformation:string;

 

  constructor() { }

  ngOnInit() {
  }
  onEdit(personInfo){
    this.personEvent.emit(personInfo);
    this.index= this.people.indexOf(personInfo);
    this.people.splice(this.index)
    console.log(this.personEvent);
}


}

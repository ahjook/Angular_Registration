import { Component, OnInit } from '@angular/core';
import { personInfo } from '../registration/model';  

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public info: personInfo;
  public Name: string
  public EmailAdd: string
  public Gender:string
  public Address:String
  public Phone:String
  public Password:String
  public personList: any[]=[]
  
  constructor() { 
    this.info = new personInfo()
  }


  ngOnInit() {
  }

  onSubmit(sampleForm){
    this.info = {
      name:this.Name,
      email:this.EmailAdd,
      gender:this.Gender,
      address:this.Address,
      phone:this.Phone,
      password:this.Password,
    }
   
    this.personList.push(this.info)
    sampleForm.form.reset()
    // console.log();
    // this.Name = '';
    // this.EmailAdd = '';
    // this.Gender = '';
    
  }
  getData(personInfo){
    this.Name = personInfo.name;
    this.EmailAdd =personInfo.email;
    this.Gender= personInfo.gender;
    this.Address=personInfo.address;
    this.Phone= personInfo.phone;
    this.Password= personInfo.password;
  
    this.personList= this.personList.filter(item => {
      if(item != personInfo){
        return item;
      }
    })
  }
  
}
  

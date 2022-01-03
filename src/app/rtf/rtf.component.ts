


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {RegName,RegEmail,RegPassword,RegContact, RegPan} from 'src/app/shared/constant/constantData';
import { APIServiceService } from '../Services/apiservice.service';


@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.css']
})
export class RtfComponent implements OnInit {
  stdForm:any;

  verificationData = { mobile: 99999988888, otp: 2222 };

  
   

  constructor(private fb:FormBuilder,private apiservice: APIServiceService) { }

  ngOnInit(): void {
    
  this.stdForm=new FormGroup({
    stdName:new FormControl('' ,[Validators.required ,Validators.pattern(RegName)]),
    stdCity:new FormControl('' ,[Validators.required]),
    stdEmail:new FormControl('' ,[Validators.required ,Validators.pattern( RegEmail)]),
    
    stdPhone:new FormControl('' ,[Validators.required ,Validators.pattern(RegContact)]),
    pan:new FormControl('' ,[Validators.required ,Validators.pattern(RegPan)]),
    
    
    stdTerm:new FormControl('',[Validators.requiredTrue])
    })
}
  getData(val:any){
    console.log(val);
  }

  
  getOTP() {
    window.alert("OTP is 200")
    this.apiservice.get_OTP(this.stdForm).subscribe(data => {
     
      console.log(data)});
    console.log("inside getOTP method");
  }

resendOTP() {
    window.alert("Resend OTP is 200")
   this.apiservice.get_OTP(this.stdForm).subscribe(data => {
      console.log(data)});
    console.log("inside resendOTP method");
  }
verifyOTP() {
    this.apiservice.verify_OTP(this.verificationData).subscribe(data => {
      console.log(data);
      alert("Thank you for verification "+data.fullname);});
    console.log("inside verifyOTP method");
  }
  // press(){
  //   window.alert("Data added succesfully")
  // }


  
}



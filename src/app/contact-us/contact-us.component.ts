import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
declare const $:any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  userData = new FormGroup(
    {
    userName:new FormControl('',[Validators.required ,Validators.minLength(3) ]),
    userMail:new FormControl('',[Validators.email]),
    userMessage:new FormControl('',[Validators.required])
    
    }
    )
  constructor() {}
   

  ngOnInit() {
  }
}

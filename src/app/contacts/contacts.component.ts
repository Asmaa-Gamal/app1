import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

userData = new FormGroup(
{
userName:new FormControl('',[Validators.required ,Validators.minLength(3) ]),
userAge:new FormControl('',[Validators.min(10),Validators.max(50)]),
userMail:new FormControl('',[Validators.email]),
userPassword:new FormControl('',[Validators.pattern(/^[A-Z][a-zA-Z]{2,8}/)])

}
)
saveFrom()
{
  console.log(this.userData);
}
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
// import { User } from '../user/user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  constructor(private router: Router , private userservice : UserService ) {

  }
  
  username : string ='';
  password : string ='';


  ngOnInit(): void {

  }

  onSubmit() {
    // console.log(f.value);  // { first: '', last: '' }
    // console.log(f.valid);  // false
    // console.log(this.username, this.password);
    this.userservice.username = this.username;
    this.router.navigate(['/']);
  }


}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private userservice : UserService, private router: Router){}
  title = 'century21-clone';
  Username : string = "";


  onactivate(){
    // console.log(this.userservice.username);
    this.Username = this.userservice.username;
    localStorage.setItem('users',this.Username);
    console.log(localStorage.getItem('users'));
  }

  ngOnInit(): void{
    if(localStorage.getItem('users')!= ''){
      this.userservice.username = localStorage.getItem('users') || '{}';
    }
  }

  onLogout(){
    this.userservice.username = '';
    // localStorage.removeItem('users');
    this.router.navigate(['']);
    // location.reload();
  }
  

}

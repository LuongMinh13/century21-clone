import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userservice : UserService) { }

  public username = this.userservice.username
  
  ngOnInit(): void {
  }

}

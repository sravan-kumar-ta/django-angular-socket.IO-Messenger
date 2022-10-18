import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: any;  
  users: any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getCurrentUser().subscribe(data => {
      console.log(this.currentUser)
      this.currentUser = data;

      this.service.getallUsers().subscribe(data => {
        this.users = data;
      })

    })
  }

}

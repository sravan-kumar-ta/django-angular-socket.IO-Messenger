import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  register: any;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.register = {
      username: [''],
      password: [''],
    };
  }

  registerUser(): void {
    this.service.registerUser(this.register).subscribe(
      () => {
        alert("User Registered Sucessfully");
        this.router.navigate(['/login']);
      },
      error => {
        if (error.error.username != null) {
          alert(error.error.username)
        }
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TokenManagerService } from 'src/app/services/token-manager.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any;

  constructor(
    private services: UserService,
    private tokenManager: TokenManagerService,
    private mainComponent: AppComponent,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginData = {
      username: '',
      password: ''
    }
  }

  login(): void {
    this.services.loginUser(this.loginData).subscribe(
      (response: any) => {
        this.tokenManager.addNewToken(response.token);
        this.mainComponent.user = true
        this.router.navigate(['/home'])
      },
      error => {
        if (error.error.non_field_errors != null) {
          alert(error.error.non_field_errors)
        }
      }
    )
  }

}

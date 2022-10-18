import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  
  public user: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if('auth_token' in localStorage){
      this.user = true;
    } else {
      this.user = false;
    }
  }

  openNav() {
    const mySidebar: HTMLElement | null = document.getElementById('mySidebar');
    const main: HTMLElement | null = document.getElementById('main');
    if (mySidebar && main) {
      mySidebar.style.width = "175px";
      main.style.marginLeft = "175px";
    }
  }

  closeNav() {
    const mySidebar: HTMLElement | null = document.getElementById('mySidebar');
    const main: HTMLElement | null = document.getElementById('main');
    if (mySidebar && main) {
      mySidebar.style.width = "0";
      main.style.marginLeft = "0";
    }
  }

  logout() {
    localStorage.clear();
    this.user = false;
    this.router.navigate(['/login']);
  }
}

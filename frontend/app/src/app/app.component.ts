import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  isAuthenticated!: Boolean
  constructor(private aServie: AuthService){
  }

  ngOnInit(): void {
    this.isAuthenticated = this.aServie.isUserLoggedIn
  }

  
}

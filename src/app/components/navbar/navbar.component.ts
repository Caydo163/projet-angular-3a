import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CookieService } from '../../services/cookie.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatButton, MatIconModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAdmin: boolean = false;
  
  constructor(
    private cookieService: CookieService,
  ) { }
  
  ngDoCheck() {
    this.isAdmin = this.cookieService.getBooleanCookie('isAdmin');
  }
}

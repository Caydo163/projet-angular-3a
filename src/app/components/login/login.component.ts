import { Component } from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: '',
})
export class LoginComponent {
  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    let isAdmin: boolean = this.cookieService.getBooleanCookie('isAdmin');
    
    if (isAdmin === false) {
      this.cookieService.setCookie('isAdmin', 'true');
      this.router.navigate(['ingredients']);
    } else {
      this.router.navigate(['logout']);
    }
  }
}

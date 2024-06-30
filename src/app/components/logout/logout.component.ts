import { Component } from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  template: '',
})
export class LogoutComponent {
  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    let isAdmin: boolean = this.cookieService.getBooleanCookie('isAdmin');
    
    if (isAdmin === true) {
      this.cookieService.setCookie('isAdmin', 'false');
      this.router.navigate(['']);
    } else {
      this.router.navigate(['login']);
    }
  }
}

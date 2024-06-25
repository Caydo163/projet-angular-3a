import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from '../services/cookie.service';
import { inject } from '@angular/core';

export const AdminGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  
  if (!cookieService.getBooleanCookie('isAdmin')) {
    router.navigateByUrl('');
    
    return false;
  }
  
  return true;
};
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  constructor() { }
  
  setCookie(name: string, value: string) {
    document.cookie = name + "=" + value + ";";
  }
  
  getCookie(name: string): string|null {
    let cookieName = name + "=";
    let cookies = decodeURIComponent(document.cookie).split(';');

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName)) {
        return cookie.substring(cookieName.length);
      }
    }
    
    return null;
  }
  
  getBooleanCookie(name: string): boolean {
    let cookie: string|null = this.getCookie(name);
    return cookie === 'true';
  }
}

import { Component,OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   constructor(private cookieService: CookieService) {}
    isModalVisible = false;
  email = '';
  password = '';
  rememberMe = false;
    users: { email: string; password: string }[] = []; // Array to hold multiple users
   openModal() {
    this.isModalVisible = true;
  }
  closeModal() {
    this.isModalVisible = false;
  }
   // Set cookies for username and password
  setUsersCookie(users: { email: string; password: string }[]) {
    this.cookieService.set('users', JSON.stringify(users), { expires: 1, path: '/' });
  }
  // Set a cookie
   setCookie() {
    this.cookieService.set('email', this.email, { expires: 1, path: '/' });
    this.cookieService.set('password', this.password, { expires: 1, path: '/' });
  }
  // Get a cookie
  getCookie() {
    const email = this.cookieService.get('email');
    const password = this.cookieService.get('password');
     if (email && password) {
      this.email = email;
      this.password = password;
    }
  }
  // Delete a cookie
  deleteCookie() {
    this.cookieService.delete('email', '/');
    this.cookieService.delete('password', '/');
  }
 onSubmit() {
    // Handle form submission, like making an HTTP request
     console.log('Form submitted');
    console.log('Username:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);

    if (this.rememberMe){
    this.setCookie();
    const existingUsers = JSON.parse(this.cookieService.get('users') || '[]');
    existingUsers.push({ email: this.email, password: this.password });
    this.setUsersCookie(existingUsers);
  } else {
    this.deleteCookie();
  }
  this.closeModal();
  }
   ngOnInit() {
    // Retrieve stored users from cookies
    const storedUsers = JSON.parse(this.cookieService.get('users') || '[]');
    this.users = storedUsers;
    this.getCookie();
  }
}

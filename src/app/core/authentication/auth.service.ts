import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async login(email: string, password: string) {
    try {
      debugger
      const storedUsers = localStorage.getItem('users');
      const users: { email: string; password: string }[] = storedUsers ? JSON.parse(storedUsers) : [];

      // Simulate an asynchronous operation if needed
      // await new Promise(resolve => setTimeout(resolve, 1000));

      // Find the user by email and password
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}

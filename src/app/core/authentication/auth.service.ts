import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      const users = [
        { email: 'user@example.com', password: 'password123' },
        { email: 'anotheruser@example.com', password: 'securePassword' }
      ];

      const user = users.find(u => u.email === email && u.password === password);

      setTimeout(() => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  }
}

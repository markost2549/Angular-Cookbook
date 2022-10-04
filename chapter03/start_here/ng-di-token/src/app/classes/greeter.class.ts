import { InjectionToken } from '@angular/core';
import { User } from '../interfaces/user.interface';

export const GREETER = new InjectionToken<Object>('Greeter', {
  providedIn: 'root',
  factory: () => Greeter,
});
export class Greeter implements User {
  firstName;
  lastName;
  constructor(user: User) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

  greet() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {

  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james@smith.com',
      drinkPreference: 'Coca',
      hobbies: [
        'coder',
        'la dégustation de café'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers(): void{
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User): void{
    this.users.push(user);
    this.emitUsers();
  }
}

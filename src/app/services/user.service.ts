import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Move } from '../models/move.model';
import { Contact } from '../models/contact.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

  }

  getUser(): User {
    return this.currentUser;
  }

  isLoggedin() {
    return !!this.currentUser;
  }

  addFunds(amount: number): void {
    this.currentUser.coins += amount;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }
    

  signup(name: string): void {
    this.currentUser = { name: name, coins: 100, moves: [] };
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  addMove(contact: Contact, amount: number): void {
    const move: Move = {
      toId: contact._id || '',
      to: contact.name,
      at: Date.now(),
      amount: amount
    };
    this.currentUser.coins -= amount;
    this.currentUser.moves.unshift(move);
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }


}




import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    name: string = '';
  
    constructor(private router: Router, private userService: UserService) {}
  
   onSignup() {
    this.userService.signup(this.name);
    this.router.navigate(['/']);
}
}


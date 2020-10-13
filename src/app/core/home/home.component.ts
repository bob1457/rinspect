import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userId = 'TrLS9eN8HnKQbhbcqiOU';

  constructor(private authServie: AuthService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.authServie.SignOut();
    console.log('signed out!');
  }

}

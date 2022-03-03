import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';
import { UserService } from 'src/app/user/services/user.service';
// import { Ng7MatBreadcrumbService } from 'ng7-mat-breadcrumb';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // userId = 'TrLS9eN8HnKQbhbcqiOU';
  userId = '';

  constructor(private authServie: AuthService,
              private router: Router,
              // private ng7MatBreadcrumbService: Ng7MatBreadcrumbService,
              private userService: UserService) { }

  ngOnInit(): void {

    // const breadcrumb = { customText: 'This is Custom Text', dynamicText: 'Level 2 ' };
    // this.ng7MatBreadcrumbService.updateBreadcrumbLabels(breadcrumb);

    this.userService.getCurrentUser()
                    .subscribe(res => {
                      if(res) {
                        this.userId = res.uid;
                      }
                      console.log(this.userId);
                    });
  }

  getUser() {
    this.router.navigate([`home/user/${this.userId}`]);
  }

  signOut() {
    this.authServie.SignOut();
    console.log('signed out!');
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {

  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
    },
    {
      title: 'Memberships',
      url: '/view-membership',
    },
    // {
    //   title: 'Clients',
    //   url: '/clients',
    // },
    // {
    //   title: 'Users',
    //   url: '/all-users',
    // },
  ]


  user: any = {
    name: ""
  };
  constructor(
    private menuCtrl: MenuController,
    public authService: AuthService,
    public navCtrl: NavController,
  ) {
    this.getUser();
  }

  ngOnInit() { }

  getUser() {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      if (user) {
        this.authService.getUser(user.uid).subscribe(snap => {
          this.user = snap.payload.data();
        })
      }
    })
  }




  signOut() {
    this.authService.logout();
  }


  openProfile() {
    this.menuCtrl.enable(true, 'profile');
    this.menuCtrl.open('profile');
  }
}


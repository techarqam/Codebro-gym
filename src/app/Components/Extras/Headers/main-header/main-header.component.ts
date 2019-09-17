import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/Services/Auth/auth.service';

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
    // {
    //   title: 'Projects',
    //   url: '/projects',
    // },
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
    this.authService.getUser().subscribe(snap => {
      this.user = snap.payload.data();
    })
  }




  signOut() {
    this.authService.logout();
  }


  openProfile() {
    this.menuCtrl.enable(true, 'profile');
    this.menuCtrl.open('profile');
  }
  gtChat() {
    this.navCtrl.navigateRoot("/chat");
  }
}


import { Component, OnInit } from '@angular/core';
import { ModelsService } from 'src/app/Models/models';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { CommonService } from 'src/app/Services/Common/common.service';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  disableBtn: boolean = false;
  constructor(
    public modelService: ModelsService,
    public commonService: CommonService,
    public authService: AuthService,
    public navCtrl: NavController,
  ) { }

  ngOnInit() { }



  signUp() {

    this.modelService.signUp.patchValue({
      timestamp: moment().format(),
    });
    let data = this.modelService.signUp.value;
    if (this.modelService.signUp.valid) {
      this.disableBtn = true;
      this.authService.signUpCompany(data).then(() => {
        this.modelService.signUp.reset();
        this.navCtrl.navigateRoot(`/dashboard`);
        this.disableBtn = false;
      }).catch(err => {
        this.commonService.presentToast(err);
      })
    } else {
      this.commonService.presentToast("Gym not valid")
    }
  }



}

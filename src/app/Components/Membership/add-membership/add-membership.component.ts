import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import { ModelsService } from '../../../Models/models';
import { CommonService } from '../../../Services/Common/common.service';
import { MembershipService } from '../../../Services/membership/membership.service';

@Component({
  selector: 'add-add-membership',
  templateUrl: './add-membership.component.html',
  styleUrls: ['./add-membership.component.scss'],
})
export class AddMembershipComponent implements OnInit {
  disableBtn: boolean = false;
  constructor(
    public modelService: ModelsService,
    public commonService: CommonService,
    public membershipService: MembershipService,
    public navCtrl: NavController,
  ) { }
  ngOnInit() { }

  addMembership() {
    this.modelService.membership.patchValue({
      timestamp: moment().format()
    });
    let data = this.modelService.membership.value;
    if (this.modelService.membership.valid) {
      this.disableBtn = true;
      this.membershipService.addMembership(data).then(() => {
        this.modelService.membership.reset();
        this.navCtrl.navigateRoot('/view-membership');
        this.disableBtn = false;
        this.commonService.presentToast("Membership added");
      })
    } else {
      this.commonService.presentToast("Membership not valid")
    }
  }
}

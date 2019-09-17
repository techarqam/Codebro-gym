import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModelsService } from '../../../Models/models';
import { CommonService } from '../../../Services/Common/common.service';
import { MembershipService } from '../../../Services/membership/membership.service';

@Component({
  selector: 'edit-add-membership',
  templateUrl: './edit-membership.component.html',
  styleUrls: ['./edit-membership.component.scss'],
})
export class EditMembershipComponent implements OnInit {
  disableBtn: boolean = false;
  membership: any = {};
  constructor(
    public modelService: ModelsService,
    public commonService: CommonService,
    private router: ActivatedRoute,
    public membershipService: MembershipService,
    public navCtrl: NavController,
  ) {
    this.router.params.subscribe(params => {
      this.getMembership(params['id']);
    });
  }
  ngOnInit() { }
  getMembership(id) {
    this.membershipService.getSingleMembership(id).subscribe(snap => {
      this.membership = snap.payload.data();
      this.membership.id = snap.payload.id;
      this.modelService.membership.patchValue(this.membership)
    })
  }
  updateMembership() {
    this.modelService.membership.patchValue({
      timestamp: moment().format()
    });
    let data = this.modelService.membership.value;
    if (this.modelService.membership.valid) {
      this.disableBtn = true;
      this.membershipService.updateMemberships(data, this.membership.id).then(() => {
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

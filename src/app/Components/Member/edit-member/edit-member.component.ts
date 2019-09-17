import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModelsService } from '../../../Models/models';
import { CommonService } from '../../../Services/Common/common.service';
import { MemberService } from '../../../Services/member/member.service';
import { MembershipService } from 'src/app/Services/membership/membership.service';
import { DiscountService } from 'src/app/Services/discount/discount.service';
import { SessionsService } from 'src/app/Services/sessions/sessions.service';

@Component({
  selector: 'edit-add-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss'],
})
export class EditMemberComponent implements OnInit {
  disableBtn: boolean = false;
  member: any = {};
  membership: Array<any> = [];
  discount: Array<any> = [];
  sessions: Array<any> = [];
  constructor(
    public modelService: ModelsService,
    public commonService: CommonService,
    private router: ActivatedRoute,
    public memberService: MemberService,
    public navCtrl: NavController,
    public membershipService: MembershipService,
    public discountService: DiscountService,
    public sessionsService: SessionsService,
  ) {
    this.router.params.subscribe(params => {
      this.getmemberships();
      this.getdiscounts();
      this.getsessionss();
      this.getMember(params['id']);
    });
  }
  ngOnInit() { }
  getMember(id) {
    this.memberService.getSingleMember(id).subscribe(snap => {
      this.member = snap.payload.data();
      this.member.id = snap.payload.id;
      this.modelService.member.patchValue(this.member)
    })
  }
  updateMember() {
    this.modelService.member.patchValue({
      timestamp: moment().format()
    });
    let data = this.modelService.member.value;
    if (this.modelService.member.valid) {
      this.disableBtn = true;
      this.memberService.updateMembers(data, this.member.id).then(() => {
        this.modelService.member.reset();
        this.navCtrl.navigateRoot('/view-member');
        this.disableBtn = false;
        this.commonService.presentToast("Member added");
      })
    } else {
      this.commonService.presentToast("Member not valid")
    }
  }


  getmemberships() {
    this.membershipService.getMemberships().subscribe(snap => {
      let tempArray = [];
      snap.forEach(snip => {
        let temp: any = snip.payload.doc.data();
        temp.id = snip.payload.doc.id;
        temp.timestamp = moment(temp.timestamp).fromNow();
        tempArray.push(temp);
      })
      this.membership = tempArray;
    });
  }

  getdiscounts() {
    this.discountService.getDiscounts().subscribe(snap => {
      let tempArray = [];
      snap.forEach(snip => {
        let temp: any = snip.payload.doc.data();
        temp.id = snip.payload.doc.id;
        temp.timestamp = moment(temp.timestamp).fromNow();
        tempArray.push(temp);
      })
      this.discount = tempArray;
    });
  }


  getsessionss() {
    this.sessionsService.getSessionss().subscribe(snap => {
      let tempArray = [];
      snap.forEach(snip => {
        let temp: any = snip.payload.doc.data();
        temp.id = snip.payload.doc.id;
        temp.timestamp = moment(temp.timestamp).fromNow();
        tempArray.push(temp);
      })
      this.sessions = tempArray;
    });
  }


}

import { Component, OnInit } from '@angular/core';
        import * as moment from 'moment';
        import { AlertController, NavController } from '@ionic/angular';
        import { ActivatedRoute } from '@angular/router';
        import { ModelsService } from '../../../Models/models';
        import { CommonService } from '../../../Services/Common/common.service';
        import { MemberService } from '../../../Services/member/member.service';

        @Component({
        selector: 'details-add-member',
        templateUrl: './details-member.component.html',
        styleUrls: ['./details-member.component.scss'],
        })
        export class DetailsMemberComponent implements OnInit {
          member: any = {};
          showLoader: boolean = false;
          constructor(
            public modelService: ModelsService,
            public alertCtrl: AlertController,
            private router: ActivatedRoute,
            public commonService: CommonService,
            public memberService: MemberService,
            public navCtrl: NavController,
          ) { 
          this.router.params.subscribe(params => {
            this.getMember(params['id']);
          });      
        }
        ngOnInit() { }
        getMember(id){
          this.memberService.getSingleMember(id).subscribe(snap => {
            this.member = snap.payload.data();
            this.member.id = snap.payload.id;
          })      
        }

        async deleteMemberConfirm() {
          const alert = await this.alertCtrl.create({
            header: "Delete" + " " + this.member.name,
            message: 'This action cannot be reversed',
            inputs: [
              {
                name: 'name',
                type: 'text',
                placeholder: 'Member Name',
              },
            ],
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: (blah) => {
                }
              }, {
                text: 'Delete',
                handler: data => {
                  if (data.name.toLowerCase() == this.member.name.toLowerCase()) {
                    this.deleteMember();
                  } else {
                    this.commonService.presentToast("Member Name not Valid");
                  }
                  this.alertCtrl.dismiss();
                }
              }
            ]
          });
          return await alert.present();
       }
      
       deleteMember() {
        this.showLoader = true;
        this.memberService.delMembers(this.member.id).then(() => {
          this.commonService.presentToast("Member Deleted");
          this.showLoader = false;
          this.navCtrl.navigateRoot("/view-member");
        })
      }
      editMember() {
        let x = '/edit-member/' + this.member.id;
        this.navCtrl.navigateRoot(x);
      }
      }
      
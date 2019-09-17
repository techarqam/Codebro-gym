import { Component, OnInit } from '@angular/core';
        import * as moment from 'moment';
        import { AlertController, NavController } from '@ionic/angular';
        import { ActivatedRoute } from '@angular/router';
        import { ModelsService } from '../../../Models/models';
        import { CommonService } from '../../../Services/Common/common.service';
        import { MembershipService } from '../../../Services/membership/membership.service';

        @Component({
        selector: 'details-add-membership',
        templateUrl: './details-membership.component.html',
        styleUrls: ['./details-membership.component.scss'],
        })
        export class DetailsMembershipComponent implements OnInit {
          membership: any = {};
          showLoader: boolean = false;
          constructor(
            public modelService: ModelsService,
            public alertCtrl: AlertController,
            private router: ActivatedRoute,
            public commonService: CommonService,
            public membershipService: MembershipService,
            public navCtrl: NavController,
          ) { 
          this.router.params.subscribe(params => {
            this.getMembership(params['id']);
          });      
        }
        ngOnInit() { }
        getMembership(id){
          this.membershipService.getSingleMembership(id).subscribe(snap => {
            this.membership = snap.payload.data();
            this.membership.id = snap.payload.id;
          })      
        }

        async deleteMembershipConfirm() {
          const alert = await this.alertCtrl.create({
            header: "Delete" + " " + this.membership.name,
            message: 'This action cannot be reversed',
            inputs: [
              {
                name: 'name',
                type: 'text',
                placeholder: 'Membership Name',
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
                  if (data.name.toLowerCase() == this.membership.name.toLowerCase()) {
                    this.deleteMembership();
                  } else {
                    this.commonService.presentToast("Membership Name not Valid");
                  }
                  this.alertCtrl.dismiss();
                }
              }
            ]
          });
          return await alert.present();
       }
      
       deleteMembership() {
        this.showLoader = true;
        this.membershipService.delMemberships(this.membership.id).then(() => {
          this.commonService.presentToast("Membership Deleted");
          this.showLoader = false;
          this.navCtrl.navigateRoot("/view-membership");
        })
      }
      editMembership() {
        let x = '/edit-membership/' + this.membership.id;
        this.navCtrl.navigateRoot(x);
      }
      }
      
import { Component, OnInit } from '@angular/core';
        import * as moment from 'moment';
        import { AlertController, NavController } from '@ionic/angular';
        import { ActivatedRoute } from '@angular/router';
        import { ModelsService } from '../../../Models/models';
        import { CommonService } from '../../../Services/Common/common.service';
        import { SessionsService } from '../../../Services/sessions/sessions.service';

        @Component({
        selector: 'details-add-sessions',
        templateUrl: './details-sessions.component.html',
        styleUrls: ['./details-sessions.component.scss'],
        })
        export class DetailsSessionsComponent implements OnInit {
          sessions: any = {};
          showLoader: boolean = false;
          constructor(
            public modelService: ModelsService,
            public alertCtrl: AlertController,
            private router: ActivatedRoute,
            public commonService: CommonService,
            public sessionsService: SessionsService,
            public navCtrl: NavController,
          ) { 
          this.router.params.subscribe(params => {
            this.getSessions(params['id']);
          });      
        }
        ngOnInit() { }
        getSessions(id){
          this.sessionsService.getSingleSessions(id).subscribe(snap => {
            this.sessions = snap.payload.data();
            this.sessions.id = snap.payload.id;
          })      
        }

        async deleteSessionsConfirm() {
          const alert = await this.alertCtrl.create({
            header: "Delete" + " " + this.sessions.name,
            message: 'This action cannot be reversed',
            inputs: [
              {
                name: 'name',
                type: 'text',
                placeholder: 'Sessions Name',
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
                  if (data.name.toLowerCase() == this.sessions.name.toLowerCase()) {
                    this.deleteSessions();
                  } else {
                    this.commonService.presentToast("Sessions Name not Valid");
                  }
                  this.alertCtrl.dismiss();
                }
              }
            ]
          });
          return await alert.present();
       }
      
       deleteSessions() {
        this.showLoader = true;
        this.sessionsService.delSessionss(this.sessions.id).then(() => {
          this.commonService.presentToast("Sessions Deleted");
          this.showLoader = false;
          this.navCtrl.navigateRoot("/view-sessions");
        })
      }
      editSessions() {
        let x = '/edit-sessions/' + this.sessions.id;
        this.navCtrl.navigateRoot(x);
      }
      }
      
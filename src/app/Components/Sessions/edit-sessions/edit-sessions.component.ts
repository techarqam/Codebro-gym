import { Component, OnInit } from '@angular/core';
        import * as moment from 'moment';
        import { NavController } from '@ionic/angular';
        import { ActivatedRoute } from '@angular/router';
        import { ModelsService } from '../../../Models/models';
        import { CommonService } from '../../../Services/Common/common.service';
        import { SessionsService } from '../../../Services/sessions/sessions.service';

        @Component({
        selector: 'edit-add-sessions',
        templateUrl: './edit-sessions.component.html',
        styleUrls: ['./edit-sessions.component.scss'],
        })
        export class EditSessionsComponent implements OnInit {
          disableBtn: boolean = false;
          sessions : any = {};
          constructor(
            public modelService: ModelsService,
            public commonService: CommonService,
            private router: ActivatedRoute,
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
            this.modelService.sessions.patchValue(this.sessions)
          })      
        }
        updateSessions() {
          this.modelService.sessions.patchValue({
            timestamp: moment().format()
          });
          let data = this.modelService.sessions.value;
          if (this.modelService.sessions.valid) {
            this.disableBtn = true;
            this.sessionsService.updateSessionss(data,this.sessions.id).then(() => {
              this.modelService.sessions.reset();
              this.navCtrl.navigateRoot('/view-sessions');
              this.disableBtn = false;
              this.commonService.presentToast("Sessions added");
            })
          } else {
            this.commonService.presentToast("Sessions not valid")
          }          
      }
    }
    
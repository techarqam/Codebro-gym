import { Component, OnInit } from '@angular/core';
        import * as moment from 'moment';
        import { NavController } from '@ionic/angular';
        import { ModelsService } from '../../../Models/models';
        import { CommonService } from '../../../Services/Common/common.service';
        import { SessionsService } from '../../../Services/sessions/sessions.service';

        @Component({
        selector: 'add-add-sessions',
        templateUrl: './add-sessions.component.html',
        styleUrls: ['./add-sessions.component.scss'],
        })
        export class AddSessionsComponent implements OnInit {
            disableBtn: boolean = false;
            constructor(
                public modelService: ModelsService,
                public commonService: CommonService,
                public sessionsService: SessionsService,
                public navCtrl: NavController,
            ) { }
            ngOnInit() { }
            
            addSessions() {
                  this.modelService.sessions.patchValue({
                    timestamp: moment().format()
                  });
                  let data = this.modelService.sessions.value;
                  if (this.modelService.sessions.valid) {
                    this.disableBtn = true;
                    this.sessionsService.addSessions(data).then(() => {
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
            
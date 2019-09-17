import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import { SessionsService } from '../../../Services/sessions/sessions.service';
@Component({
  selector: 'view-add-sessions',
  templateUrl: './view-sessions.component.html',
  styleUrls: ['./view-sessions.component.scss'],
})
export class ViewSessionsComponent implements OnInit {
  showLoader: boolean = false;
  sessions: Array<any> = [];
  sessionsLoaded: Array<any> = [];
  isGrid: boolean = true;
  constructor(
    public sessionsService: SessionsService,
    public navCtrl: NavController,
  ) {
    this.getsessionss();
  }

  ngOnInit() { }
  getsessionss() {
    this.showLoader = true;
    this.sessionsService.getSessionss().subscribe(snap => {
      let tempArray = [];
      snap.forEach(snip => {
        let temp: any = snip.payload.doc.data();
        temp.id = snip.payload.doc.id;
        temp.timestamp = moment(temp.timestamp).fromNow();
        tempArray.push(temp);
      })
      this.sessions = tempArray;
      this.sessionsLoaded = tempArray;
      this.showLoader = false;
    });
  }


  initializeItems(): void {
    this.sessions = this.sessionsLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q: string = searchbar;
    if (!q.length) {
      return;
    }
    this.sessions = this.sessions.filter((v) => {
      if ((v.name) && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  gtDetails(p) {
    let x = '/sessions-details/' + p.id;
    this.navCtrl.navigateRoot(x);
  }


}
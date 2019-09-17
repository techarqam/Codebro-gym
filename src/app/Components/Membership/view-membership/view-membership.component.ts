import { Component, OnInit } from '@angular/core';
        import * as moment from 'moment';
        import { NavController } from '@ionic/angular';
        import { MembershipService } from '../../../Services/membership/membership.service';
        @Component({
          selector: 'view-add-membership',
          templateUrl: './view-membership.component.html',
          styleUrls: ['./view-membership.component.scss'],
          })
          export class ViewMembershipComponent implements OnInit {
            showLoader: boolean = false;
            membership: Array<any> = [];
            membershipLoaded: Array<any> = [];
            isGrid: boolean = true;
            constructor(
              public membershipService: MembershipService,
              public navCtrl: NavController,
            ) {
              this.getmemberships();
            }
          
            ngOnInit() { }
            getmemberships(){
              this.showLoader = true;
                this.membershipService.getMemberships().subscribe(snap => {
                  let tempArray = [];
                  snap.forEach(snip => {
                    let temp: any = snip.payload.doc.data();
                    temp.id = snip.payload.doc.id;
                    temp.timestamp = moment(temp.timestamp).fromNow();
                    tempArray.push(temp);
                  })
                  this.membership = tempArray;
                  this.membershipLoaded = tempArray;
                  this.showLoader = false;
              });
            }


            initializeItems(): void {
              this.membership = this.membershipLoaded;
            }
            getItems(searchbar) {
              this.initializeItems();
              let q: string = searchbar;
              if (!q.length) {
                return;
              }
              this.membership = this.membership.filter((v) => {
                if ((v.name) && q) {
                  if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                  }
                  return false;
                }
              });
            }
          
            gtDetails(p) {
              let x = '/membership-details/' + p.id;
              this.navCtrl.navigateRoot(x);
            }
                    

          }
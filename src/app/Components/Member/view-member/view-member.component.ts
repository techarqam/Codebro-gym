import { Component, OnInit } from '@angular/core';
        import * as moment from 'moment';
        import { NavController } from '@ionic/angular';
        import { MemberService } from '../../../Services/member/member.service';
        @Component({
          selector: 'view-add-member',
          templateUrl: './view-member.component.html',
          styleUrls: ['./view-member.component.scss'],
          })
          export class ViewMemberComponent implements OnInit {
            showLoader: boolean = false;
            member: Array<any> = [];
            memberLoaded: Array<any> = [];
            isGrid: boolean = true;
            constructor(
              public memberService: MemberService,
              public navCtrl: NavController,
            ) {
              this.getmembers();
            }
          
            ngOnInit() { }
            getmembers(){
              this.showLoader = true;
                this.memberService.getMembers().subscribe(snap => {
                  let tempArray = [];
                  snap.forEach(snip => {
                    let temp: any = snip.payload.doc.data();
                    temp.id = snip.payload.doc.id;
                    temp.timestamp = moment(temp.timestamp).fromNow();
                    tempArray.push(temp);
                  })
                  this.member = tempArray;
                  this.memberLoaded = tempArray;
                  this.showLoader = false;
              });
            }


            initializeItems(): void {
              this.member = this.memberLoaded;
            }
            getItems(searchbar) {
              this.initializeItems();
              let q: string = searchbar;
              if (!q.length) {
                return;
              }
              this.member = this.member.filter((v) => {
                if ((v.name) && q) {
                  if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                  }
                  return false;
                }
              });
            }
          
            gtDetails(p) {
              let x = '/member-details/' + p.id;
              this.navCtrl.navigateRoot(x);
            }
                    

          }
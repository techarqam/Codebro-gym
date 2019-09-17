import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';
import { DiscountService } from '../../../Services/discount/discount.service';
@Component({
  selector: 'view-add-discount',
  templateUrl: './view-discount.component.html',
  styleUrls: ['./view-discount.component.scss'],
})
export class ViewDiscountComponent implements OnInit {
  showLoader: boolean = false;
  discount: Array<any> = [];
  discountLoaded: Array<any> = [];
  isGrid: boolean = true;
  constructor(
    public discountService: DiscountService,
    public navCtrl: NavController,
  ) {
    this.getdiscounts();
  }

  ngOnInit() { }
  getdiscounts() {
    this.showLoader = true;
    this.discountService.getDiscounts().subscribe(snap => {
      let tempArray = [];
      snap.forEach(snip => {
        let temp: any = snip.payload.doc.data();
        temp.id = snip.payload.doc.id;
        temp.timestamp = moment(temp.timestamp).fromNow();
        tempArray.push(temp);
      })
      this.discount = tempArray;
      this.discountLoaded = tempArray;
      this.showLoader = false;
    });
  }


  initializeItems(): void {
    this.discount = this.discountLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q: string = searchbar;
    if (!q.length) {
      return;
    }
    this.discount = this.discount.filter((v) => {
      if ((v.name) && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  gtDetails(p) {
    let x = '/discount-details/' + p.id;
    this.navCtrl.navigateRoot(x);
  }


}
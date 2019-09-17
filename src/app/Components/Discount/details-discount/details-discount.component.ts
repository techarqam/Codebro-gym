import { Component, OnInit } from '@angular/core';
        import * as moment from 'moment';
        import { AlertController, NavController } from '@ionic/angular';
        import { ActivatedRoute } from '@angular/router';
        import { ModelsService } from '../../../Models/models';
        import { CommonService } from '../../../Services/Common/common.service';
        import { DiscountService } from '../../../Services/discount/discount.service';

        @Component({
        selector: 'details-add-discount',
        templateUrl: './details-discount.component.html',
        styleUrls: ['./details-discount.component.scss'],
        })
        export class DetailsDiscountComponent implements OnInit {
          discount: any = {};
          showLoader: boolean = false;
          constructor(
            public modelService: ModelsService,
            public alertCtrl: AlertController,
            private router: ActivatedRoute,
            public commonService: CommonService,
            public discountService: DiscountService,
            public navCtrl: NavController,
          ) { 
          this.router.params.subscribe(params => {
            this.getDiscount(params['id']);
          });      
        }
        ngOnInit() { }
        getDiscount(id){
          this.discountService.getSingleDiscount(id).subscribe(snap => {
            this.discount = snap.payload.data();
            this.discount.id = snap.payload.id;
          })      
        }

        async deleteDiscountConfirm() {
          const alert = await this.alertCtrl.create({
            header: "Delete" + " " + this.discount.name,
            message: 'This action cannot be reversed',
            inputs: [
              {
                name: 'name',
                type: 'text',
                placeholder: 'Discount Name',
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
                  if (data.name.toLowerCase() == this.discount.name.toLowerCase()) {
                    this.deleteDiscount();
                  } else {
                    this.commonService.presentToast("Discount Name not Valid");
                  }
                  this.alertCtrl.dismiss();
                }
              }
            ]
          });
          return await alert.present();
       }
      
       deleteDiscount() {
        this.showLoader = true;
        this.discountService.delDiscounts(this.discount.id).then(() => {
          this.commonService.presentToast("Discount Deleted");
          this.showLoader = false;
          this.navCtrl.navigateRoot("/view-discount");
        })
      }
      editDiscount() {
        let x = '/edit-discount/' + this.discount.id;
        this.navCtrl.navigateRoot(x);
      }
      }
      
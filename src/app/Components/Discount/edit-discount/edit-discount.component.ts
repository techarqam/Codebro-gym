import { Component, OnInit } from '@angular/core';
        import * as moment from 'moment';
        import { NavController } from '@ionic/angular';
        import { ActivatedRoute } from '@angular/router';
        import { ModelsService } from '../../../Models/models';
        import { CommonService } from '../../../Services/Common/common.service';
        import { DiscountService } from '../../../Services/discount/discount.service';

        @Component({
        selector: 'edit-add-discount',
        templateUrl: './edit-discount.component.html',
        styleUrls: ['./edit-discount.component.scss'],
        })
        export class EditDiscountComponent implements OnInit {
          disableBtn: boolean = false;
          discount : any = {};
          constructor(
            public modelService: ModelsService,
            public commonService: CommonService,
            private router: ActivatedRoute,
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
            this.modelService.discount.patchValue(this.discount)
          })      
        }
        updateDiscount() {
          this.modelService.discount.patchValue({
            timestamp: moment().format()
          });
          let data = this.modelService.discount.value;
          if (this.modelService.discount.valid) {
            this.disableBtn = true;
            this.discountService.updateDiscounts(data,this.discount.id).then(() => {
              this.modelService.discount.reset();
              this.navCtrl.navigateRoot('/view-discount');
              this.disableBtn = false;
              this.commonService.presentToast("Discount added");
            })
          } else {
            this.commonService.presentToast("Discount not valid")
          }          
      }
    }
    
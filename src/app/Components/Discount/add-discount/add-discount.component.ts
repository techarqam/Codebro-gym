import { Component, OnInit } from '@angular/core';
        import * as moment from 'moment';
        import { NavController } from '@ionic/angular';
        import { ModelsService } from '../../../Models/models';
        import { CommonService } from '../../../Services/Common/common.service';
        import { DiscountService } from '../../../Services/discount/discount.service';

        @Component({
        selector: 'add-add-discount',
        templateUrl: './add-discount.component.html',
        styleUrls: ['./add-discount.component.scss'],
        })
        export class AddDiscountComponent implements OnInit {
            disableBtn: boolean = false;
            constructor(
                public modelService: ModelsService,
                public commonService: CommonService,
                public discountService: DiscountService,
                public navCtrl: NavController,
            ) { }
            ngOnInit() { }
            
            addDiscount() {
                  this.modelService.discount.patchValue({
                    timestamp: moment().format()
                  });
                  let data = this.modelService.discount.value;
                  if (this.modelService.discount.valid) {
                    this.disableBtn = true;
                    this.discountService.addDiscount(data).then(() => {
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
            
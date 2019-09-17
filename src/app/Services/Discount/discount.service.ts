import { Injectable } from '@angular/core';
    import { AngularFirestore } from '@angular/fire/firestore';
    @Injectable({
      providedIn: 'root'
    })
    export class DiscountService {
      dbRef = this.db.collection('Discount ', ref => ref.orderBy('timestamp', 'desc'));
      constructor(
        public db: AngularFirestore,
      ) { }
      addDiscount(discount) {
        return this.dbRef.add(discount);
      }
      getDiscounts() {
        return this.dbRef.snapshotChanges();
      }
      getSingleDiscount(discountId) {
        return this.dbRef.doc(discountId).snapshotChanges();
      }
      updateDiscounts(discount, discountId) {
        return this.dbRef.doc(discountId).update(discount);
      }
      delDiscounts(discountId) {
        return this.dbRef.doc(discountId).delete();
      }
      }
    
import { Injectable } from '@angular/core';
    import { AngularFirestore } from '@angular/fire/firestore';
    @Injectable({
      providedIn: 'root'
    })
    export class MembershipService {
      dbRef = this.db.collection('Membership ', ref => ref.orderBy('timestamp', 'desc'));
      constructor(
        public db: AngularFirestore,
      ) { }
      addMembership(membership) {
        return this.dbRef.add(membership);
      }
      getMemberships() {
        return this.dbRef.snapshotChanges();
      }
      getSingleMembership(membershipId) {
        return this.dbRef.doc(membershipId).snapshotChanges();
      }
      updateMemberships(membership, membershipId) {
        return this.dbRef.doc(membershipId).update(membership);
      }
      delMemberships(membershipId) {
        return this.dbRef.doc(membershipId).delete();
      }
      }
    
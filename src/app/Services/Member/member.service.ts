import { Injectable } from '@angular/core';
    import { AngularFirestore } from '@angular/fire/firestore';
    @Injectable({
      providedIn: 'root'
    })
    export class MemberService {
      dbRef = this.db.collection('Member ', ref => ref.orderBy('timestamp', 'desc'));
      constructor(
        public db: AngularFirestore,
      ) { }
      addMember(member) {
        return this.dbRef.add(member);
      }
      getMembers() {
        return this.dbRef.snapshotChanges();
      }
      getSingleMember(memberId) {
        return this.dbRef.doc(memberId).snapshotChanges();
      }
      updateMembers(member, memberId) {
        return this.dbRef.doc(memberId).update(member);
      }
      delMembers(memberId) {
        return this.dbRef.doc(memberId).delete();
      }
      }
    
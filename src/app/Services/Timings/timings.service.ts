import { Injectable } from '@angular/core';
    import { AngularFirestore } from '@angular/fire/firestore';
    @Injectable({
      providedIn: 'root'
    })
    export class TimingsService {
      dbRef = this.db.collection('Timings ', ref => ref.orderBy('timestamp', 'desc'));
      constructor(
        public db: AngularFirestore,
      ) { }
      addTimings(timings) {
        return this.dbRef.add(timings);
      }
      getTimingss() {
        return this.dbRef.snapshotChanges();
      }
      getSingleTimings(timingsId) {
        return this.dbRef.doc(timingsId).snapshotChanges();
      }
      updateTimingss(timings, timingsId) {
        return this.dbRef.doc(timingsId).update(timings);
      }
      delTimingss(timingsId) {
        return this.dbRef.doc(timingsId).delete();
      }
      }
    
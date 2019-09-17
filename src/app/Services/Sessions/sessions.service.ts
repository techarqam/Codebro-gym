import { Injectable } from '@angular/core';
    import { AngularFirestore } from '@angular/fire/firestore';
    @Injectable({
      providedIn: 'root'
    })
    export class SessionsService {
      dbRef = this.db.collection('Sessions ', ref => ref.orderBy('timestamp', 'desc'));
      constructor(
        public db: AngularFirestore,
      ) { }
      addSessions(sessions) {
        return this.dbRef.add(sessions);
      }
      getSessionss() {
        return this.dbRef.snapshotChanges();
      }
      getSingleSessions(sessionsId) {
        return this.dbRef.doc(sessionsId).snapshotChanges();
      }
      updateSessionss(sessions, sessionsId) {
        return this.dbRef.doc(sessionsId).update(sessions);
      }
      delSessionss(sessionsId) {
        return this.dbRef.doc(sessionsId).delete();
      }
      }
    
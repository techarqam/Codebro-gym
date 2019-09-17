import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { first } from 'rxjs/operators';
import * as firebase from 'firebase';
import * as moment from 'moment';
import { CommonService } from '../Common/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  id: string;



  constructor(
    private fireAuth: AngularFireAuth,
    private db: AngularFirestore,
    private commonService: CommonService,
  ) {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      if (user) {
        this.id = user.uid;
      }
    })
  }

  getCompany() {
    return new Promise((resolve, reject) => {
      this.db.collection("Users").doc(this.id).snapshotChanges().subscribe(snap => {
        let temp: any = snap.payload.data();
        resolve(temp.company);
      })
    })
  }

  getUser() {
    return this.db.collection("Users").doc(this.id).snapshotChanges();
  }


  isLoggedIn() {
    return this.fireAuth.authState.pipe(first())
  }
  logout() {
    return this.fireAuth.auth.signOut();
  }


  loginM(data) {
    return this.fireAuth.auth.signInWithEmailAndPassword(data.email, data.pass)
  }

  signUpCompany(data) {
    let tempPass = this.createPassword();
    let company: any = {
      companyName: data.companyName,
      admin: "",
      timestamp: moment().format()
    };
    let user: any = {
      name: data.adminName,
      email: data.email,
      password: tempPass,
      status: "Unverified",
      active: true,
      isAdmin: true,
      addedBy: "",
      timestamp: moment().format()
    };

    return this.fireAuth.auth.createUserWithEmailAndPassword(data.email, tempPass).then(admin => {
      company.admin = admin.user.uid;
      this.db.collection("Companies").add(company).then(company => {
        user.company = company.id;
        user.addedBy = admin.user.uid;
        this.db.collection("Users").doc(admin.user.uid).set(user)
          .catch(err => { this.commonService.presentToast(err); });
      }).catch(err => { this.commonService.presentToast(err); });
    }).catch(err => { this.commonService.presentToast(err); });

  }


  createPassword() {
    let length = 16;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal: string = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }


}

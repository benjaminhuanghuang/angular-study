import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore) { }

  addSubs(subsData: any) {
    return this.afs.collection('subscribers').add(subsData).then(() => {

    });
  }

  checkSubs(subEmail: string) {
    return this.afs.collection('subsribers', ref => ref.where('email', '==', subEmail)).get()
  }
}

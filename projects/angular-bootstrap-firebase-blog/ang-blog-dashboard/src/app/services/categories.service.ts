import { Injectable } from '@angular/core';
//
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

//
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: AngularFirestore, private toaster: ToastrService) { }

  saveData(data: Category) {
    this.afs.collection('categories').add(data)
      .then(docRef => {
        console.log('Document written', docRef);
        this.toaster.success('Category added successfully', 'Success');
      })
      .catch(err => {
        console.error('Error adding document: ', err);
      });
  }

  loadData() {
    return this.afs.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }
}

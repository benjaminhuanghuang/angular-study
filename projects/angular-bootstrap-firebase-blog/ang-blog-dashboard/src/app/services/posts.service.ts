import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private toaster: ToastrService,
    private router: Router) { }

  uploadImage(selectedImage: any, postData: any) {
    const filePath = `postIMG/${Date.now()}`;

    this.storage.upload(filePath, selectedImage).then(() => {
      this.storage.ref(filePath).getDownloadURL().subscribe((url) => {
        postData.postImgPath = url;
        //console.log(postData);
        this.saveData(postData);
      });
    });
  }

  saveData(postData: any) {
    this.afs.collection('posts').add(postData).then(docRef => {
      this.toaster.success('Data insert successfully', 'Success');
      this.router.navigate(['/posts']);
    });
  }

  loadData() {
    return this.afs.collection('posts').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  loadOneData(id: string) {
    return this.afs.doc(`posts/${id}`).valueChanges();
  }
}

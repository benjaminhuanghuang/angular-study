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

  uploadImage(selectedImage: any, postData: any, formStatus: string, docId: string) {
    const filePath = `postIMG/${Date.now()}`;

    this.storage.upload(filePath, selectedImage).then(() => {
      this.storage.ref(filePath).getDownloadURL().subscribe((url) => {
        postData.postImgPath = url;
        //console.log(postData);
        if (formStatus === 'Add New') {
          this.saveData(postData);
        }
        else if (formStatus === 'Edit') {
          this.updateData(docId, postData);
        }
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

  updateData(id: string, postData: any) {
    this.afs.doc(`posts/${id}`).update(postData).then(() => {
      this.toaster.success('Data Updated Successfully');
      this.router.navigate(['/posts']);
    });
  }

  deleteImage(postImgPath: string, id: string) {
    this.storage.storage.refFromURL(postImgPath).delete().then(() => {
      this.deleteData(id);
    })
  }

  deleteData(id: string) {
    this.afs.doc(`posts/${id}`).delete().then(() => {
      this.toaster.warning('Data Deleted ..!');
    });
  }

  markFeatured(id: string, featuredData: any) {
    this.afs.doc(`posts/${id}`).update(featuredData).then(() => {
      this.toaster.info('Featured Status Updated');
    })
  }
}

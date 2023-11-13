import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router) { }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(logRef => {
        this.toastr.success('Logged In Successfully');
        this.loadUser();

        this.loggedIn$.next(true);

        this.router.navigate(['/']);
      })
      .catch(error => {
        this.toastr.warning(error);
      });
  }

  loadUser() {
    this.afAuth.authState.subscribe(user => {
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.toastr.success('User Logged Out Successfully');
      localStorage.removeItem('user');
      this.loggedIn$.next(false);
      this.router.navigate(['/login']);
    });
  };

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }
}

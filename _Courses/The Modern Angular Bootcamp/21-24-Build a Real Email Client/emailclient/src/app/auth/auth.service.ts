import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}
interface SigninCredentials {
  username: string;
  password: string;
}

interface SignupResponse {
  username: string;
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

interface SigninResponse {
  username: string;
}

/*

*/
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = 'https://api.angular-email.com/auth';
  signedin$ = new BehaviorSubject(false);
  username = '';

  // Inject HttpClient
  constructor(private http: HttpClient) { }

  usernameAvailable(username: string): Observable<UsernameAvailableResponse> {
    return this.http.post<UsernameAvailableResponse>(`${this.rootUrl}/username`, {
      username
    });
  }

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${this.rootUrl}/signup`, credentials)
      .pipe((
        tap(({ username }) => {
          this.signedin$.next(true);
          this.username = username;
        })
      ));
  }

  signin(credentials: SigninCredentials): Observable<SigninResponse> {
    return this.http.post<SigninResponse>(`${this.rootUrl}/signin`, credentials)
      .pipe(
        tap(({ username }) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }

  checkAuth(): Observable<SignedInResponse> {
    return this.http.get<SignedInResponse>(`${this.rootUrl}/signedin`)
      .pipe(
        tap(({ authenticated, username }) => {
          this.signedin$.next(authenticated);
          this.username = username;
        })
      );
  }

  signout(): Observable<any> {
    return this.http.post(`${this.rootUrl}/signout`, {})
      .pipe(
        tap(() => {
          this.signedin$.next(false);
        })
      );
  }
}

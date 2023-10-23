import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//
import { Email } from './email';

export interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  getEmails(): Observable<EmailSummary[]> {
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }

  getEmail(id: string): Observable<Email> {
    return this.http.get<Email>(`${this.rootUrl}/emails/${id}`);
  }

  sendEmail(email: Email): Observable<Email> {
    return this.http.post<Email>(`${this.rootUrl}/emails`, email);
  }
}

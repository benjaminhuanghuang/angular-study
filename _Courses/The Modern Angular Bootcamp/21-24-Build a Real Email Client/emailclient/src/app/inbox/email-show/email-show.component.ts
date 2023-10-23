import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
//
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email!: Email;

  constructor(private emailService: EmailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Nested subscribes are not recommended
    /*
    this.route.params.subscribe(({ id }) => {
      this.emailService.getEmail(id).subscribe((email) => {
        this.email = email;
      });
    });
    */
    this.route.params.pipe(
      // cancel the previous request if a new request is emitted
      switchMap(({ id }) => {
        return this.emailService.getEmail(id);
      }),
    ).subscribe((email) => {
      this.email = email;
    });
  }
}

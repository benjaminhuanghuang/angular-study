import { Component } from '@angular/core';
import { SubscribersService } from '../services/subscribers.service';
import { Sub } from '../models/sub';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {
  isEmailError: boolean = false;
  isSubscribed: boolean = false;

  constructor(private subService: SubscribersService) {

  }

  onSubmit(formValue: any) {
    const sumData: Sub = {
      name: formValue.Name,
      email: formValue.Email
    }

    this.subService.checkSubs(sumData.email).subscribe((val: any) => {
      if (val.empty) {
        this.subService.addSubs(sumData);
        this.isSubscribed = true;
      }
      else {
        this.isEmailError = true;
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//
import { ContactsService } from '../contacts/contacts.service';
import { phoneTypeValues } from '../contacts/contact.model';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  phoneTypes = phoneTypeValues;
  contactForm = this.fb.nonNullable.group({
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: <Date | null>null,
    favoritesRanking: <number | null>null,
    phones: this.fb.array([this.createPhoneGroup()]),
    address: this.fb.nonNullable.group({
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: '',
    })
  });

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) {
      this.subscribeToAddressChanges();
      return;
    }

    this.contactsService.getContact(contactId).subscribe(contact => {
      if (!contact) return;
      for (let i = 1; i < contact.phones.length; i++) {
        this.addPhone();
      }
      this.contactForm.setValue(contact);
      this.subscribeToAddressChanges();
    });
  }

  subscribeToAddressChanges() {
    const addressGroup = this.contactForm.controls.address;
    addressGroup.valueChanges
      .pipe(distinctUntilChanged(this.stringifyCompare))
      .subscribe(() => {
        for (const controlName in addressGroup.controls) {
          addressGroup.get(controlName)?.removeValidators([Validators.required]);
          addressGroup.get(controlName)?.updateValueAndValidity();
        }
      });

    addressGroup.valueChanges
      .pipe(debounceTime(2000), distinctUntilChanged(this.stringifyCompare))
      .subscribe(() => {
        for (const controlName in addressGroup.controls) {
          addressGroup.get(controlName)?.addValidators([Validators.required]);
          addressGroup.get(controlName)?.updateValueAndValidity();
        }
      });
  }

  stringifyCompare(a: any, b: any) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  createPhoneGroup() {
    const phoneGroup = this.fb.nonNullable.group({
      phoneNumber: '',
      phoneType: '',
      preferred: false
    });

    phoneGroup.controls.phoneType.valueChanges
      .pipe(distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)))
      .subscribe(value => {
        if (value)
          phoneGroup.controls.phoneNumber.addValidators([Validators.required]);
        else
          phoneGroup.controls.phoneNumber.removeValidators([Validators.required]);

        phoneGroup.controls.phoneNumber.updateValueAndValidity();
      });

    return phoneGroup;
  }

  addPhone() {
    this.contactForm.controls.phones.push(this.createPhoneGroup());
  }

  saveContact() {
    this.contactsService.saveContact(this.contactForm.getRawValue()).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }
}

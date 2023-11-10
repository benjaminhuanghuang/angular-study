- CheckboxControlValueAccessor
- DefaultValueAccessor
- NumberValueAccessor
- RadioControlValueAccessor
- RangeValueAccessor
- SelectControlValueAccessor
- SelectMultipleControlValueAccessor


## radio buttons
```ts
<div class="radio">
  <input type="radio" formControlName="phoneType" value="mobile"> Mobile
  <input type="radio" formControlName="phoneType" value="work"> Work
  <input type="radio" formControlName="phoneType" value="other"> Other
</div>
```
Use the same formControlName for all radio buttons in a group. The value of each radio button is the value that will be set on the form control when that radio button is selected.
```ts
  console.log(this.contactForm.controls.phone.controls.phoneType.value);
```

Bind options to the radio buttons
```html
<span ngFor="let phoneType of phoneTypes">
  <input type="radio" formControlName="phoneType" [value]="phoneType.value">{{phoneType.label}}
</span>
```
## select lists
```html
<select formControlName="addressType">
  <option value="home">Home</option>
  <option value="work">Work</option>
  <option value="mobile">Other</option>
</select>

<select formControlName="addressType">
  <option *ngFor="let addressType of addressTypes" [value]="addressType.value">
    {{addressType.title}}
  </option>
</select>
```
```ts

```


##  checkboxes
```html
<div>
  <input type="checkbox" formControlName="personal" value=""> Personal
</div>
```

```ts
  console.log(this.contactForm.value.personal);
```

##  textarea elements
```html
<div>
  <textarea placeholder="Notes" rows="5" formControlName="notes"></textarea>
</div>

```

##  type="numeric" inputs
```html
<input formControlName="favoritesRanking" type="number" placeholder="Favorites Ranking" >
```
Apply NumberValueAccessor to the input element


##  type="range" inputs
Render a slider on the page
```html
<input formControlName="favoritesRanking" type="range" min="0" max="5" placeholder="Favorites Ranking"/>
<span> {{ contractForm.controls.favoritesRanking.value}}</span>
```

##  type="date" inputs
Format the date value
```html
<input formControlName="dateOfBirth" 
       type="date" 
       [value]="contactForm.controls.date0fBirth.value | date:'yyyy-MM-dd'" 
       placeholder="Date of Birth" />
```

Need to convert the string value to a Date object

```ts
  export class ContactsService {
      constructor (private http: HttpClient) { }

      getContact (id: string): Observable<Contact | undefined> {
      return this.http.get<Contact>(`api/contacts/${id}`).pipe(map(c => {
        const dob = c.dateOfBirth ? new Date(c.dateOfBirth) : null;
        return {...c, dateOfBirth: dob }
    }));
  }
```

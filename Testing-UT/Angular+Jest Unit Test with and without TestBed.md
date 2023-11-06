# Angular + Jest Unit Test with and without TestBed
https://engineering.corzent.com/angular-jest-unit-test-with-and-without-testbed-4ac6fd2232bc

We are using jest instead of jasmine here


Suppose we have a home component, and it is having translateWords method that translates words that are given to it. 
It is using translate service to translating
```
import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  paragraph: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry..';
  
  constructor(private translateService: TranslateService) {}
  
  ngOnInit(): void {
    this.translateWords(this.paragraph);
  }

  translateWords(words: string) {
    return this.translateService.translate(this.paragraph);
  }
}
```
below is TranslateService class
```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  translate(words: string): string {
    //some logic here
    return 'translated Words';
  }
}
```

unit test for this home component without using Angular Test Bed
```
import { HomeComponent } from './home.component';
describe('HomeComponent', () => {
  //(1)
  let translateMock: ReturnType<jest.Mock>;
  let component: HomeComponent;

  beforeEach(() => {
    //(2)
    translateMock = {
      //(3)
      translate: jest.fn(() => {
        return 'translated Words';
      }),
    };

    //(4)
    component = new HomeComponent(translateMock);
  });

  it('should call translatewords and translate words', () => {
    expect(component.translateWords('hello')).toBe('translated Words');
    expect(translateMock.translate).toHaveBeenCalledTimes(1);
  });
});
```

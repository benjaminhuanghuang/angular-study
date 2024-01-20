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

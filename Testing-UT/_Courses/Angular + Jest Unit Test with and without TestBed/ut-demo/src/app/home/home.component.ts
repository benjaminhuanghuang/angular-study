import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  paragraph: string =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry..';

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.translateWords(this.paragraph);
  }

  translateWords(words: string) {
    return this.translateService.translate(this.paragraph);
  }
}

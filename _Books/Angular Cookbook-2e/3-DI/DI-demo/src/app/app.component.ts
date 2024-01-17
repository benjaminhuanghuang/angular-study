import { Component, OnInit, inject } from '@angular/core';
import Jokes, { JOKES } from './services/jokes.service';
import { IJoke } from './interfaces/joke.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  joke!: IJoke;
  jokes = inject(JOKES);
  ngOnInit() {
    this.getJokes();
  }

  async getJokes() {
    this.joke = await this.jokes.getRandomJoke();
  }
}

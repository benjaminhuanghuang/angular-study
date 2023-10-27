import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  enteredTest!: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onButtonClick(){
    console.log(this.enteredTest);
    this.dataService.raiseDataEmitterEvent(this.enteredTest);
  }
}

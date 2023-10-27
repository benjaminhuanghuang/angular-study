import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  inputText!: string;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.dataEmitter.subscribe(data =>{
      this.inputText = data;
    });
  }

}

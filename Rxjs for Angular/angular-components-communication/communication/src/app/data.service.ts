import { Injectable } from "@angular/core";
import {Subject}from 'rxjs';

@Injectable()
export class DataService {
  dataEmitter= new Subject<string>();

  raiseDataEmitterEvent(data: string): void {
    this.dataEmitter.next(data);
  }
}

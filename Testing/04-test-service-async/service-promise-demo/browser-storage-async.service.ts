import { Injectable } from "@angular/core";
import { IContactPreference } from "./contact.preference";
/*
  Stubbed class implementing storage

  为什么使用一个class而不是interface？
  Angular使用 tokens 来解决依赖关系。interface 不会被翻译成JavaScript，
  为了告诉Angular要注入什么，需要创建一个 class，当i nterface 来用
*/
@Injectable()
export class BrowserStorageAsync {
  getItem: (property: string) => Promise<IContactPreference>;
  setItem: (property: string, value: string | object) => Promise<boolean>;
}

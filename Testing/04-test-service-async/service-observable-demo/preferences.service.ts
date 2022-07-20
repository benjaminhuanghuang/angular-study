/*
  PreferencesService stores the user’s last sort order for the ContactsList table. 

  This service will take a value and save it to the browser’s built-in storage system.

  When the app starts, it will use this value to set the sort state for the 
  ContactsList table to be in the order that the user last used, 
  even if they’ve refreshed the page or restarted the browser
*/
import { Injectable } from "@angular/core";
import { BrowserStorage } from "./browser-storage.service";

export interface IContactPreference {
  key: string;
  value: string | object;
}

@Injectable()
export class PreferencesService {
  /*
    Angular dependency injection uses the service constructor to look up and supply dependencies
    
    Angular uses this information to supply an instance of BrowserStorage when 
    PreferencesService is first created via dependency injection
  */
  constructor(private browserStorage: BrowserStorage) {}

  public saveProperty(preference: IContactPreference) {
    if (!preference.key.length) {
      throw new Error("saveProperty requires a non-blank property name");
    }
    this.browserStorage.setItem(preference.key, preference.value);
  }

  public getProperty(key: string): any {
    return this.browserStorage.getItem(key);
  }
}

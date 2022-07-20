```
import { Injectable } from '@angular/core';
import { BrowserStorage } from './browser-storage.service';

@Injectable()
export class PreferencesService {
  // browserStorage will be DI by Angular
  constructor(private browserStorage: BrowserStorage ) { }

  public saveProperty(preference: IContactPreference) {
   this.browserStorage.setItem(preference.key, preference.value);
  }

  public getProperty(key: string) : any {
    return this.browserStorage.getItem(key);
  }
}


```

## Create Test

```
import { TestBed, inject } from '@angular/core/testing';
import { IContactPreference, PreferencesService } from './preferences.service';

describe('PreferencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreferencesService]
    });
  });

  it('should create the Preferences Service', inject(
    [PreferencesService], (service: PreferencesService) => {
    expect(service).toBeTruthy();
    }));
});

```

```

```

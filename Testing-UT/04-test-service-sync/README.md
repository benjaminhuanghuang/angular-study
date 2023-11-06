在显示联系人列表的同时, 用户应该能够按照名字、姓氏或电子邮件地址对列表进行排序。为了记住
排序顺序，要在 localstorage 中保存用户的 preferences。

这里使用了两个 service, 一个处理组织 application 的 preferences
另一个封装对 对 storage 交互

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

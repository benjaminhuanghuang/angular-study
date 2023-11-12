import { Component, Provider, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
//
import { profileIconNames } from './profile-icon-names';


const PROFILE_ICON_VALUE_PROVIDER: Provider = {
  provide: NG_VALUE_ACCESSOR,
  // use forwardRef to use a type before it's defined
  useExisting: forwardRef(() => ProfileIconSelectorComponent),
  multi: true
}


@Component({
  selector: 'con-profile-icon-selector',
  templateUrl: './profile-icon-selector.component.html',
  styleUrls: ['./profile-icon-selector.component.css'],
  providers: [PROFILE_ICON_VALUE_PROVIDER]
})
export class ProfileIconSelectorComponent implements ControlValueAccessor {
  profileIcons = profileIconNames;
  showAllIcons: boolean = true;
  selectedIcon!: string | null;

  private onChange!: Function;

  writeValue(icon: string | null) {
    this.selectedIcon = icon;
    if (icon && icon !== '')
      this.showAllIcons = false;
    else
      this.showAllIcons = true;
  }

  registerOnChange(fn: Function): void {
    this.onChange = (iconName: string) => {
      fn(iconName);
    }
  }

  registerOnTouched(fn: Function) {
    this.onChange = fn;
  }

  iconSelected(iconName: string) {
    this.selectedIcon = iconName;
    this.showAllIcons = false;
  }
}

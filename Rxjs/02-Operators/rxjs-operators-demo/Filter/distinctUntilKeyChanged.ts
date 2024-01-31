
/*
Only emit when the specified key value has changed

signature: distinctUntilKeyChanged(key, compare: fn): Observable

ignore non unique values-distinctUntilChanged
*/
import { from } from "rxjs";
const { map, distinctUntilKeyChanged } = require('rxjs/operators');

const source$ = from([
    { name: 'Brian' },
    { name: 'Joe' },
    { name: 'Joe' },
    { name: 'Sue' }
  ]);

  source$
  // custom compare based on name property
  .pipe(distinctUntilKeyChanged('name'))
  // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
  .subscribe(console.log);

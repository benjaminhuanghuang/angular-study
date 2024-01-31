/*
Only emit when the current value is different than the last.
ignore non unique values

signature: distinctUntilChanged(compare: function): Observable

*/
import { from } from "rxjs";
const { map, distinctUntilChanged } = require("rxjs/operators");

const sampleObject = { name: "Test" };
//Objects must be same reference
const source$ = from([sampleObject, sampleObject, sampleObject]);

source$
  // custom compare based on name property
  .pipe(distinctUntilChanged("name"))
  // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
  .subscribe(console.log);

const nameSource$ = from([
  { name: "Brian" },
  { name: "Joe" },
  { name: "Joe" },
  { name: "Sue" },
]);

nameSource$
  // custom compare for name
  .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
  // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
  .subscribe(console.log);

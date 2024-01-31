# Learning RxJS Operators by Example Playbook
By David Mann, 2018-12

https://app.pluralsight.com/library/courses/rxjs-operators-by-example-playbook/table-of-contents


Cold observables start when they get first subscriber.  Each subscriber gets the value in the observable sequence from the beginning. 
For example, File read, Http request, DB query, etc.


Hot observables start when they are created. Hot observables provide only the values that come through after the subscriber subscribes.
For example, mouse clicks, key presses, stock tickers, etc.

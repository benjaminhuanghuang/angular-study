Signals provide a new way for our code to tell our templates (and other code) that our data has changed

This improves Angular's change detection

Signals are integrated into the existing Angular change detection system

Don't need zone.js for change detection


Signals are reactive
A signal always has a value
A signal is side effect free: Reading a signal can cause no other changes nor execute any other code

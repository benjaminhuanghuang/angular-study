A Signal according to Angular documentation is:
A wrapper around a value that can notify interested consumers when that value changes. Signals can contain any value, from simple primitives to complex data structures.

A signal’s value is always read through a getter function, which allows Angular to track where the signal is used.

Signals may be either writable or read-only.


Signals allows defining reactive values and expressing dependencies between them.

Signals provide a new way for the code to tell the templates (and other code) that the data has changed.
This improves Angular's change detection And makes our code more reactive



Change detection is how angular updates the UI when the state in the app changes.

This improves Angular's change detection And makes our code more reactive

Better Reactivity means
• Fine-grained control of updates
• More scalable, better performance
• Use the tools you already know and love

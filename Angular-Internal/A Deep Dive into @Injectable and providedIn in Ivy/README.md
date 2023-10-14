# A Deep Dive into @Injectable and providedIn in Ivy
https://indepth.dev/posts/1151/a-deep-dive-into-injectable-and-providedin-in-ivy

## @Injectable
The @Injectable decorator is used as an annotation tool only. This means that the decorator just contains important information for the compiler and will be removed at runtime and never will be called as a function.


## What kinds of problems can be solved using providedIn?
- Makes your providers tree-shakable
- Prevents duplication of provider instances
- Forces your providers to always create new instances

Knowledge of the internals of @Injectable and providedIn can help you to debug your providers, manage the  count of instances, improve your bundle size and decide which injector to use.

The processing of Angular Injectables:
During the build phase the compiler collects meta information about your Injectables, updates the source code with this data, and then uses it at runtime.



## Core Modules
Core folder should contain singleton
services shared throughout app
Services that are specific to a feature can go in the feature's folder

Imported by app/root modules only once

Example: LoggingService, ErrorService, DataService

## Shared Modules
Shared folder should contain reusable components, pipes, directives

Imported by multiple feature modules

Example: CalendarComponent, AutoCompleteComponent


@Optional: A constructor parameter decorator that marks a dependency as optional.

@SkipSelf(): A constructor parameter decorator that tells the DI framework that
dependency resolution should start from the parent injector.

[2:56 PM] Erik Sommer
When you provide inside a component, that service is "scoped" to the component.  So anything in the DOM that's a child of that component will be able to access it.  
Anything above the component in the DOM will not be able to.  That's how our scoped services work.

[2:57 PM] Erik Sommer
Providing services in the module is generally only used for lazy loading.  If you're not lazy loading, you should either be providing the service in the root (`providedIn: 'root'`) or as a scoped service (provided at the component level)


[3:21 PM] Erik Sommer
Lazy loading is a filled with special cases   If ComponentA is lazy loaded, and it and its children are the only thing that need access to ServiceA, then you can provide the service inside of ComponentA.  That will keep it all packaged up and self-contained.
 
If things outside of ComponentA need to access the ServiceA, you generally want to use our lazy-loading systems to register the service and provide it lazily.  For those, you technically provide the service in the lazy module, but nobody references it directly.  Instead, when you register it with our lazy load logic, the lazy load logic handles loading
It's a bit complicated

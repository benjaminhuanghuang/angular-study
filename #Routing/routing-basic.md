You can think of an SPA as a collection of `states`, such as home, product detail, and shipping.
Each state represents a different `view` of the same area.

In the non-SPA world, site navigation is implemented by a series of requests to a server, which refreshes the entire page by sending the appropriate HTML documents to the browser.

With SPAs, the code for rendering components is already on the client (except for the lazy-loading scenarios), and you need to replace one view with another.

The area to display the view represented by the tag

```
<router-outlet></router-outlet>
```

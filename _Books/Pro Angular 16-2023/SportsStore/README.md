# SportsStore

Create project
```bash
ng new SportsStore --routing false --style css --skip-git --skip-tests
```

Setup
```bash
npm install bootstrap@5.2.3
npm install @fortawesome/fontawesome-free@6.2.1
npm install --save-dev json-server@0.17.3
npm install --save-dev jsonwebtoken@8.5.1
```
Add css to angular.json

```json
 "styles": [
    "src/styles.css",
    "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
```

Add  script in the package.json

```json
 "json": "json-server data.js -p 3500 -m authMiddleware.js"       
```

json-serve creates web services from JSON data or JavaScript code and load authMiddleware.js as authentication middleware.

Error: Error: NG05100: Providers from the `BrowserModule` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the `CommonModule` instead..
Solution: Remove BrowserModule from Feature Modules:

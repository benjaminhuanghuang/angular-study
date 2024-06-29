# Ticketing Tool App in Angular | Angular 18 Project

https://www.youtube.com/watch?v=ftalatzlrgs

https://github.com/voidChetan/ticket_tool_angular_18

https://github.com/voidChetan/service_tracker_angular

API used
https://freeapi.miniprojectideas.com/index.html

## Setup

```bash
npm i bootstrap @fortawesome/fontawesome-free
```

add css to the angular.json file

```json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
],
```

## Create pages
  
```bash

  ng g c pages/home
  ng g c pages/layout
  ng g c pages/department
  ng g c pages/parentcategory
  ng g c pages/childCategory
  ng g c pages/employee
  ng g c pages/newTicket
  ng g c pages/ticket
  ng g c pages/ticketList
  ng g c pages/dashboard
```

## Routing

update app.routes.ts


## API call

Add HTTP client module in the app.config.ts

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

```

Services

To avoid  CORS policy error, need to run app on 4029 port

```json
"my-project": {
    "architect": {
        "serve": {
            "options": {
                "port": 4201
            }
        }
    }
}
```

## Login page

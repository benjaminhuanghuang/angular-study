## Features
- Authentication system: sign in, sign up, sign out
- Email client: Compose, show email list, show email detail


## Create new project
```
  ng new emailclient
```

## API server
![](./api.png)


## Create module
![](./auth-module.png)
```
  ng g m Auth --routing
  ng g m Shared

  ng g c auth/Signin
  ng g c auth/Signup

  ng g c shared/Input
```

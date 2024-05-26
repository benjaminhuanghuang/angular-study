# Server side

## Install vs code extension Nuget Gallery

## Create project

```sh
dotnet new webapi -controllers -o API
```

## Install packages

```sh
ctrl + shift + p
>nuget
View Toggle Nuget

Microsoft.EntityFrameworkCore
Microsoft.EntityFrameworkCore.Tools
Microsoft.EntityFrameworkCore.Sqlite
Microsoft.AspNetCore.Identity.EntityFrameworkCore
Microsoft.AspNetCore.Authentication.JwtBearer
```

## Setup project

Create folders: Models, Data, Dtos

Inject AppDbContext in Program.cs

Setup JWT in appsettings.json

``json
"JWTSetting": {
    "securityKey": "xyz2l303kkejoejeke23423sdfsf3r4wef4k044494kfgrerersdfe2r2errfewre4343434erererererererererr",
    "ValidAudience": "http://localhost:4200",
    "ValidIssuer": "http://localhost:5000"
  }
```
The securityKey should be a long string, otherwise it will throw an error.

Setup Identity in Program.cs

```cs
builder.Services.AddIdentity<AppUser, IdentityRole>().AddEntityFrameworkStores<AppDbContext>().AddDefaultTokenProviders();

app.UseAuthentication();

```

Run API
  
```sh
dotnet watch run
```

## Setup database

```sh
dotnet ef migrations add Initial

dotnet ef database update
```

Fix error

```txt
"Failed to open database 'xxxx.db': Parse error near line 4: no such column: table
  aster                                 WHERE (type="table" OR type="view")
                                      error here ---^"
```

Open  C:\Users\username\.vscode\extensions\alexcvzz.vscode-sqlite-0.14.1\dist\extension.js, replace
type=\"table"\ OR type=\"view\" with type='table' OR type='view'

Open SQLite database:
Ctrl + Shift + P, SQLite: Open Database

## Add controllers

```json
{
  "email": "user@example.com",
  "fullName": "string",
  "password": "Passowrd@1234",
  "roles": [
    "admin"
  ]
}

{
  "email": "user@example.com",
  "password": "Password@1234"
}


{
  "email": "admin@gmail.com",
  "password": "Password@1234"
}
```

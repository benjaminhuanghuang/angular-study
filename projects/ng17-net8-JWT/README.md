# Authentication and Login in Angular DotNet Core Web API with JWT Token | Angular 17 | .Net 8
https://www.youtube.com/watch?v=c8dCiPuDEBk
https://github.com/mevedprakash/crud-opreation-angular-dotnet?ref=morioh.com&utm_source=morioh.com


## Server side
Create Asp.net core web api project

Install Nuget packages
  Microsoft.EntityFrameworkCore
  Microsoft.EntityFrameworkCore.SqlServer

Create DataApp/DbContext.cs

Add connection string in appsettings.json
```json
  "ConnectionStrings": {
  "DefaultConnection": "Server=.\\SQLExpress;Database=EmployeeDB;Trusted_Connection=SSPI;Encrypt=false;TrustServerCertificate=true"
}
```
program.cs
```cs
  builder.Services.AddDbContext<AppDbContext>(option => option.UseSqlServer("name=ConnectionStrings:DefaultConnection"));
```

Create Controller/EmployeeController.cs, Controller/AuthController.cs


## Client side
```
  ng new crud-angular
```

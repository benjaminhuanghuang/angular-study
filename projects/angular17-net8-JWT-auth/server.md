# Server side

Install vs code extension Nuget Gallery

Create project

```sh
dotnet new webapi -controllers -o API
```

Install packages

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

Create Models folder

Create Data folder 

Inject AppDbContext in Program.cs

Setup JWT in appsettings.json

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

Open SQLite database:
Ctrl + Shift + P, SQLite: Open Database

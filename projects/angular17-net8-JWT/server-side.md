
## Create project
Create Asp.net core web api project

Install Nuget packages
  Microsoft.EntityFrameworkCore
  Microsoft.EntityFrameworkCore.SqlServer
  Microsoft.EntityFrameworkCore.Tools   # To run Add-Migration and Update-Database

## DB
Create DataApp/DbContext.cs, DataApp/Employee.cs, DataApp/EmployeeRepository.cs

Add connection string in appsettings.json
```json
  "ConnectionStrings": {
  "DefaultConnection": "Server=.\\SQLExpress;Database=EmployeeDB;Trusted_Connection=SSPI;Encrypt=false;TrustServerCertificate=true"
}
```
program.cs
```cs
  builder.Services.AddDbContext<AppDbContext>(option => option.UseSqlServer("name=ConnectionStrings:DefaultConnection"));
  builder.Services.AddScoped<EmployeeRepository>();
```

Create migration and update database, Run command in the Package Manager Console
```bash
  Add-Migration InitialCreate
  Update-Database
```


Create Controller/EmployeeController.cs, Controller/AuthController.cs

## JWT

Install Nuget packages
  Microsoft.AspNetCore.Authentication.JwtBearer
  System.IdentityModel.Tokens.Jwt


Add config in appsettings.json
```json
"Jwt": {
    "Key": "umeeeSecretKeyforouthentiootionOfpppyiwauion",
    "Issuer": "codewithved.com"
  }
```


Program.cs
```ts
builder.Services.Configure<JwtOption>(builder.Configuration.GetSection("Jwt"));
var key = builder.Configuration.GetSection("Jwt:Key").Get<string>();
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(o =>
{
    o.RequireHttpsMetadata = false;
    o.SaveToken = true;
    o.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key)),
        ValidateIssuer=false,
        ValidateAudience=false
    };
});
```

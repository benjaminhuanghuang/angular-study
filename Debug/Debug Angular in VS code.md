
1. Install JavaScript Debugger extension.
   
2. Create a launch.json file in the .vscode folder in the root of your project.
```
{
  "version": "0.2.0",
  "configurations":{
    "name": "ng serve",
    "type": "chrome",
    "request": "launch",
    "preLaunchTask": "npm: start",
    "url": "http://localhost:4200/"
  },
  {
    "name": "ng test",
    "type": "chrome",
    "request": "launch",
    "preLaunchTask": "npm: test",
    "url": "http://localhost:9876/debug.html"
  }
}
```

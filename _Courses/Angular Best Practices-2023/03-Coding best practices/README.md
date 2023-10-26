- Single responsibility principle
  Split data-repository.service.ts into  catalog-repository.service.ts and user-repository.service.ts
  
- Symbol naming
    Use camelCase for constant variables. It is easier to read and write and the IDE will complain if you try to change it.

- Preferring immutability
  ```
    this.currentUser = {newUser, ...this.currentUser}; 

    this.currentUser = {...this.currentUser, classes: [...this.currentUser.classes, classId]} 
    this.currentUser = {...this.currentUser, classes: this.currentUser.classes.concat(classId)} 

    this.currentUser = {...this.currentUser, classes:this.currentUser.classes.filter(c => c !== classId)} 

    saveUser(user) {
      const classes = user.classes || [];
      this.currentUser = {...user, classes: [...classes]};
    }
  ```
  instead of
  ```
    this.currentUser.push(newUser);

    this.currentUser.classes.push(classId);

    this.currentUser.classes = this.currentUser.classes.filter(c => c !== classId);

    saveUser(user) {
      user.classes = user.classes || [];
      this.currentUser = user;    // the code change the user object will affect the this.currentUser object, which can cause bugs
    }
  ```
- Using small functions
- 
- Using strict mode
tsconfig.json
```
{
  "compilerOptions": {
    "strict": true
  }
}
```

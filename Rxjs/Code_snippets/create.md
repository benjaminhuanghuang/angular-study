
Create observable
```
of(2, 4, 6, 8).subscribe((item) => console.log(item));
   
   
from([29, 1, 13, 2]).subscribe({
    next: (item) => console.log(`resulting item.. ${item}`),
    error: (err) => console.log(`error occurred.. ${err}`),
    complete: () => console.log('complete'),
});

```
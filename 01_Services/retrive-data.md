
```
ngOnInit() {
  this.catalogRepositoryService.getCatalog().subscribe((classes: IClass[]) => { this.classes = classes; this.applyFilter('') });
}
```

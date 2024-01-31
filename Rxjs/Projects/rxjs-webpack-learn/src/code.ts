import { Observable } from 'rxjs';  

var observable = new Observable((observer:any) => {  
    observer.next('Hello World!!');  
    observer.next('Welcome to RxJS!');  
    observer.complete();  
    observer.next('Bye');  
})  

observable.subscribe({
  next: (x: any) => logItem(x),
  error: (error: any) => logItem('Error: ' + error),
  complete: () => logItem('This is the first Example')
}
);  


function logItem(val:any) {  
    var node = document.createElement("li");  
    var textNode = document.createTextNode(val);  
    node.appendChild(textNode);  
    document.getElementById("list").appendChild(node);  
}  
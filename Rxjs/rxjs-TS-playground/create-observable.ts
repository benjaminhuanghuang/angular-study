import { Observable, Observer } from 'rxjs';

interface Book {
    bookId: number;
    title: string;
    author: string;
}
const readBooks: Book[] = [
    { bookId: 1, title: 'Clean code', author: 'Robert Cecil Martin' },
    { bookId: 1, title: 'First rate of madness', author: 'Nassir Ghaemi' },
    { bookId: 2, title: 'The acheivement habits', author: ' Bernard Roth' },
    { bookId: 3, title: 'Conscious Capitalism', author: 'John Mackey and Rajendra Sisodia'},
    { bookId: 3, title: 'The richest man in Babylon', author: 'George Samuel Clason'},
    { bookId: 3, title: 'Rich dad poor dad', author: 'Robert Kiyosaki and Sharon Lechter'},
];

console.log("Observable from scratch");

function bookObserver(observer: Observer<Book>) {    
    for (let book of readBooks) {
        observer.next(book);
    }
}

/*
    An Observable is just a function that take Observer as a parameter.
*/
let readBooks$ = new Observable<Book>(bookObserver);
console.log("Nothing happens until we subscribe\n");

readBooks$.subscribe(book => console.log(book.title));

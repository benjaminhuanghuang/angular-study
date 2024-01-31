import {ajax} from 'rxjs/ajax';


const ajax$= ajax<any>('https://random-data-api.com/api/name/random-_name');

ajax$.subscribe(data=>console.log('Subscribe 1', data.response.first_name));
ajax$.subscribe(data=>console.log('Subscribe 2', data.response.first_name));
ajax$.subscribe(data=>console.log('Subscribe 3', data.response.first_name));

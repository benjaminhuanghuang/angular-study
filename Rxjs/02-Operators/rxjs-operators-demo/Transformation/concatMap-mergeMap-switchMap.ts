/*
    concatMap: Emits values and processed in order
            Emissions are processed sequentially, one at a time
            Order matters
            Example: Insert, update and delete operations


    mergeMap: Emits values and processed in parallel
            Order doesn't matter
            Example: Retrieving related data when the criteria doesn't change


    switchMap: Cancel prior emitted
            Only the latest emission matters
            Example: Retrieving based on user selection, Typeahead functionality
    
*/

import { of } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';

const userSelectedAction$ = of('user1', 'user2', 'user3');   // select user from the UI

const todos$ = userSelectedAction$.pipe(
    switchMap(userId => {
        //this.http.get<ToDo[]>(${this.url}?userId=${userId} 
        console.log(`Retrieving todos for ${userId}`);
        return of(userId);
    }
    )
);

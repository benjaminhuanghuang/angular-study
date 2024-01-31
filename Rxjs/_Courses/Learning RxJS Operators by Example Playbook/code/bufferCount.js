
/*
    bufferCount(bufferSize): add value into buffer until full then emit the buffer
    bufferCount(bufferSize, startBufferEvery): start a new buffer when the last buffer is full
 */
const { of } = require('rxjs');
const { bufferCount } = require('rxjs/operators');

console.log('# emit buffer of 2 values or when complete');
of(1, 2, 3)
    .pipe(bufferCount(2))
    .subscribe(sequence => {
        console.log(sequence);
    });
// Output:
// [ 1, 2 ]
// [ 3 ]


of(1, 2, 3)
    .pipe(bufferCount(2, 1))
    .subscribe(sequence => {
        console.log(sequence);
    });
// Output:
// [ 1, 2 ]
// [ 2, 3 ]
// [ 3 ]

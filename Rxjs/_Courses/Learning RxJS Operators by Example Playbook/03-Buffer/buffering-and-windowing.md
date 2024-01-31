
Operators working with the output from the source observable in batches

## Buffering: Collecting output from source observable and emitting in batches based on defined condition(s)


- buffer(Notifier): add values into a buffer then emit buffered values as array whenever inner observable emits
  
- bufferCount(bufferSize): add value into buffer until full then emit the buffer
    bufferCount(bufferSize, startBufferEvery): start a new buffer when the last buffer is full

- bufferTime(timeSpan, intervalStartNewBuffer, maxBufferSize, scheduler): emit the created buffer after a given period
  
- bufferToggle(opening, closing): start collecting values when opening emits, and emit buffered values when closing emits

- bufferWhen(closingSelector): determine the closing point of a buffer


## Windowing: Collect values emitted from source observable and emit them whenever inner observable emits a value
- window
- windowCount
- windowTime
- windowToggle
- windowWhen

# Buffering vs Windowing
Buffering: Emit an Array of values
Windowing: Emit an Observable of values

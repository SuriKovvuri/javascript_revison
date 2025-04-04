/*
    Event loops: The Event Loop in Node.js is responsible for managing asynchronous tasks and ensuring non-blocking execution. Here's a concise breakdown:
        
        Single-threaded Model: Node.js uses a single thread to execute JavaScript code
        Handles Asynchronous I/O: Operations like file reading, database queries, and network requests are delegated to the background (via threads or OS mechanisms), allowing the main thread to keep running.
        Non-blocking: While waiting for asynchronous tasks to complete, the main thread can execute other tasks.
    
    Priority Order:
        Immediate Execution(Synchronous --> Call Stack):
            Code in the main file or the current call stack.
        process.nextTick Queue:
            Executes all process.nextTick callbacks.
        Micro-task Queue: 
            Executes all Promises (.then callbacks, etc.).
        Macro-task Queue (Event Loop Phases) :
            setTimeout(), setInterval(), I/O callbacks, requestAnimationFrame(), setImmediate()
*/


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");

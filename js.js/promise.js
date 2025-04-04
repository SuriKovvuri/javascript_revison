// synchronous and asynchronous
/*
    Synchronous : Tasks are executed one at a time in sequentail manner.
                -Blocking: One operation must complete before another can start.
                - program is waiting for each task to finish the before moving on to the next task.
                - If a task takes long time, it blocks the execution of subseqent task.
    Key characterstics: 
        - simpler logic : The flow is straight forward, because tasks are excuted in order
        - slower for I/O : If operations (like reading file and fetching data) takes time.
        - Blocking : next line of code must wait for current line of code.


    Asynchronous: Asynchronous operations are non-blocking
                - they allow program to move next task without waiting for current task to finish.
    Behavior : Async functions are often run in background with the result being handle later.
                eg: callbacks, promise, await.

    
Difference :
Aspect	        Synchronous	                                                Asynchronous
Execution	    Tasks execute sequentially.	                                Tasks execute in a non-blocking manner.
Blocking	    Blocks the entire execution until the task completes.	    Other tasks can execute while a task is pending.
Performance	    Inefficient for I/O-intensive tasks.	                     Better performance for I/O or network operations.
Ease of Use	    Easier to write and understand.	                             May require more effort to manage complexity.
Example	        fs.readFileSync()	                                         fs.readFile() with callbacks or Promises.
Use Case	    Small tasks or code that doesn't depend on I/O.	             Applications with heavy I/O operations.


How Does Node.js Handle Asynchronous Operations?
Node.js handles asynchronous operations using a combination of the event loop, callbacks, Promises, and the async/await syntax. Since Node.js is single-threaded, it relies on the event-driven, non-blocking architecture to handle I/O operations efficiently.

Event Loop:

The event loop is the heart of Node.js's asynchronous model. It continuously checks the call stack and handles tasks in the event queue.
When an asynchronous task (like I/O, database query, or network request) is initiated, Node.js offloads it to the libuv thread pool or system kernel.
Callbacks:

Node.js uses callbacks to execute code after an asynchronous operation completes. For example, when a file is read, the callback is executed with the result.
Promises:

Promises provide a cleaner way to handle asynchronous operations compared to callbacks, reducing callback hell.
Async/Await:

Introduced in ES2017, async/await allows writing asynchronous code that looks synchronous, improving readability.
*/

// Exmaples:
function firstName() {
    console.log("Suri...");
}

function lastName() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             nggn
    console.log("Babu...");
}

function familyName() {
    console.log("Kovvuri...");
}

function nickName() {
    console.log("Pandu...");
}

function displayNames() {
    firstName();
    lastName();
    familyName();
    nickName();
}
displayNames();


function firstName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Suri...");
            resolve();
        }, 2000); // 2-second delay
    });
}

function lastName() {
    return new Promise((resolve) => {
        console.log("Babu...");
        resolve();
    });
}

function familyName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Kovvuri...");
            resolve();
        }, 3000); // 3-second delay
    });
}

function nickName() {
    return new Promise((resolve) => {
        console.log("Pandu...");
        resolve();
    });
}

async function displayNames() {
    await firstName();
    await lastName();
    await familyName();
    await nickName();
}

displayNames();





/*
callback : ("I WILL CALLBACK YOU") 
A callback function is a function passed as an argument to another function, to be executed after the completion of the current function's task. It allows handling asynchronous operations by executing code after the operation is completed. 
    

//  Example:
function greetUser(num, callback) {
    console.log(`User id: ${num}`); // Primary function logic
    callback(); // Calling the passed-in callback function
}

function showUser() {
    console.log(`ok`); // Logic inside the callback function
}

// Passing `showUser` as the callback to `greetUser`
greetUser(5, showUser);


Error Handling in Callbacks
Always check for errors in callback functions and handle them properly.

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
});

*/

//Example2
function getUserId(userID, callback) {
    console.log("Fetching user data")
    setTimeout(() => {
        const user = {
            user_id: userID,
            name: "Suri",
            mail: "@.com"
        }
        if (!userID) {
            callback("User id is null", null)
        } else {
            callback(null, user)
        }

    }, 2000)
}

getUserId(101, (err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})










/*
Promise : Promise is a eventual completion (or failures) of a asynchronous operation
         -Promise is manage asynchronous operations of node js
         -Promise handles the success(.then()) and error (.catch()) and .finally() conditions
         -Promises provide a cleaner, more readable way to handle asynchronous tasks compared to traditional callback functions.

         Syntax:
         new Promise ((resolve, reject) => {...})

         Constructor: -Here Promise is a constructor which is used to create promise objects

         States: 3->states 1)Pending  2)Fullfilled state 3)rejected

    What are the states of a Promise?
    Pending: The promise is still being executed.
    Fulfilled: The asynchronous operation completed successfully, and .then() is called.
    Rejected: The asynchronous operation failed, and .catch() is called.



    resolve: This function is called when the asynchronous operation is successful and has completed without any errors. It is used to fulfill the Promise, and it can optionally return a value (which will be passed to the .then() handler).

    reject: This function is called when the asynchronous operation encounters an error or fails. It is used to reject the Promise, and it can optionally pass an error message or object (which will be passed to the .catch() handler).
*/



// Example

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true
        if (success) {
            resolve("Success")
            console.log("Success")
        } else {
            reject("Failure")
            console.log("Fail")
        }
    })
})

myPromise
    .then((data) => {
        console.log("Succsful")
    }).catch((error) => {
        console.log("Failing")
    }).finally(() => {
        console.log("Finally Replacing")
    })




/*
     async/await: 
     async: async is a keyword
            - a function declared with async keyword (async)
            - always return promise
            - async uses before function

    await : await is a keyword
            - pauses the execution of async funtion until the promise resolved or rejected
            - if promise is resolved, it returns the value of promise
            - if promise is rejected, it throe=ws error
*/


// without async:
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data received")
        }, 2000)
    })
}
fetchData()
    .then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })


// with async
async function fetchDataAsync() {
    try {
        const data = await fetchData(); // Wait for the Promise to resolve
        console.log(data); // Output: "Data received"
    } catch (err) {
        console.error(err); // Handle errors
    }
}

fetchDataAsync();


/*
Chaining Promises
A Promise chain allows you to handle multiple asynchronous operations in a sequential and readable manner, 
where each .then() method is called after the previous one has resolved (or rejected), passing the result 
from one operation to the next.
*/
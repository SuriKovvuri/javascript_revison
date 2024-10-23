let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; // simulate success or failure
        if (success) {
            resolve('Promise fulfilled!');
        } else {
            reject('Promise rejected!');
        }
    }, 2000);
});

// Handling the promise
promise.then((message) => {
    console.log(message); // Output: Promise fulfilled!
}).catch((error) => {
    console.log(error);   // This will run if the promise is rejected
});


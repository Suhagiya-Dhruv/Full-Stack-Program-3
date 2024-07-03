## Core Concepts of Promises

1. **States of a Promise**:
   - **Pending**: The initial state. The promise is neither fulfilled nor rejected.
   - **Fulfilled**: The operation completed successfully, and the promise has a value.
   - **Rejected**: The operation failed, and the promise has a reason for failure (error).

2. **Creating a Promise**:
   A promise is created using the `Promise` constructor, which takes a function with two parameters: `resolve` and `reject`.

   ```javascript
   const promise = new Promise((resolve, reject) => {
       // Asynchronous operation
       if (/* operation is successful */) {
           resolve(value);
       } else {
           reject(error);
       }
   });
   ```

3. **Handling Promises**:
   - `then()`: Attaches callbacks for the fulfillment and rejection of the promise.
   - `catch()`: Attaches a callback for only the rejection of the promise.
   - `finally()`: Attaches a callback that will be executed regardless of the promise's outcome (fulfilled or rejected).

   ```javascript
   promise
       .then(value => {
           // Handle fulfillment
       })
       .catch(error => {
           // Handle rejection
       })
       .finally(() => {
           // Always executed
       });
   ```

4. **Chaining Promises**:
   Promises can be chained to perform a series of asynchronous operations in sequence. Each `then` returns a new promise, allowing for further chaining.

   ```javascript
   promise
       .then(value => {
           return anotherAsyncOperation(value);
       })
       .then(result => {
           // Handle result of the second async operation
       })
       .catch(error => {
           // Handle any error in the chain
       });
   ```

5. **Promise.all()**:
   This method takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved, or rejects if any promise rejects.

   ```javascript
   Promise.all([promise1, promise2, promise3])
       .then(values => {
           // Handle array of values
       })
       .catch(error => {
           // Handle any error
       });
   ```

6. **Promise.race()**:
   This method takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

   ```javascript
   Promise.race([promise1, promise2, promise3])
       .then(value => {
           // Handle value from the first resolved promise
       })
       .catch(error => {
           // Handle error from the first rejected promise
       });
   ```

## Example

Here's a practical example of using a promise to simulate a simple asynchronous operation like fetching data from a server:

```javascript
function fetchData() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           const success = true; // Simulating success or failure
           if (success) {
               resolve("Data fetched successfully!");
           } else {
               reject("Error fetching data.");
           }
       }, 2000);
   });
}

fetchData()
   .then(data => {
       console.log(data); // "Data fetched successfully!"
   })
   .catch(error => {
       console.error(error); // "Error fetching data."
   });
```
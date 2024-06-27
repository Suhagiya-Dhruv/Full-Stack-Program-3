### Event Bubbling
Event bubbling is a type of event propagation in the HTML DOM API when an event triggers on an element, and then it propagates (or bubbles) up to its parent elements and then all the way up to the root of the document. 

For example, if you have a `<div>` inside another `<div>`, and you click the inner `<div>`, the click event will first trigger on the inner `<div>` and then bubble up to the outer `<div>`.
```javascript

        const parent = document.getElementById("parent");
        const child = document.getElementById("child");

        parent.addEventListener("click", () => {
            console.log("Parent Clicked");
        });

        child.addEventListener("click", () => {
            console.log("Child Clicked");
        });

```

In the example above, clicking on the child `div` will log both "Child Clicked" and "Parent Clicked" to the console.

### Solution: Stopping Event Bubbling
To stop event bubbling, you can use the `stopPropagation()` method of the event object.

```javascript
child.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Child Clicked");
});
```

With `event.stopPropagation()`, clicking the child `div` will only log "Child Clicked".

## `setTimeout` and `setInterval`

### `setTimeout`
The `setTimeout()` method calls a function or executes a code snippet after a specified delay (in milliseconds). It runs the function once after the delay.

#### Syntax
```javascript
setTimeout(function, delay, arg1, arg2, ...);
```

### Example
```javascript
function greet() {
    console.log("Hello after 2 seconds");
}

setTimeout(greet, 2000); // Calls greet() after 2 seconds
```

#### Clearing a Timeout
You can stop the execution by using `clearTimeout()`.
```javascript
const timeoutId = setTimeout(greet, 2000);
clearTimeout(timeoutId); // Stops the greet function from being called
```

### `setInterval`
The `setInterval()` method calls a function or executes a code snippet repeatedly, with a fixed time delay between each call.

#### Syntax
```javascript
setInterval(function, delay, arg1, arg2, ...);
```

### Example
```javascript
function greet() {
    console.log("Hello every 2 seconds");
}

const intervalId = setInterval(greet, 2000); // Calls greet() every 2 seconds
```

#### Clearing an Interval
You can stop the repeated execution by using `clearInterval()`.
```javascript
clearInterval(intervalId); // Stops the greet function from being called repeatedly
```

### Combining Both
Here's an example that combines `setTimeout` and `setInterval`:

```javascript
let count = 0;

const intervalId = setInterval(() => {
    console.log("Count:", count++);
    if (count === 5) {
        clearInterval(intervalId);
    }
}, 1000);
```

In this example, the count will be logged every second, and after logging "Count: 4", the interval will be cleared and the repeated execution will stop.

![alt text](https://vaibhavgupta.me/wp-content/uploads/2018/01/eventqueue.gif)
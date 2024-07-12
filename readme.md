# React Components: Class vs Function Components

## Class Components

Class components are ES6 classes that extend from `React.Component`. They can hold and manage state and have access to lifecycle methods.

### Lifecycle Methods

#### Mounting
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

1. **constructor()**
   - Called before anything else. It's used for initializing state and binding event handlers.

2. **static getDerivedStateFromProps(props, state)**
   - Invoked right before calling the render method. It's used to update the state based on props.

3. **render()**
   - The only required method in a class component. It returns the JSX to be rendered.

4. **componentDidMount()**
   - Invoked immediately after the component is inserted into the DOM. Perfect for making API calls or setting up subscriptions.

#### Updating
These methods are called when a component is being re-rendered:

1. **static getDerivedStateFromProps(props, state)**
   - Invoked when the component is re-rendered due to changes in props.

2. **shouldComponentUpdate(nextProps, nextState)**
   - Invoked before rendering when new props or state are received. Returns `true` or `false` to control whether the component should update.

3. **render()**
   - Re-render the component.

4. **getSnapshotBeforeUpdate(prevProps, prevState)**
   - Called right before the changes from the virtual DOM are to be reflected in the DOM.

5. **componentDidUpdate(prevProps, prevState, snapshot)**
   - Invoked immediately after updating occurs. Useful for DOM manipulations or making further API calls.

#### Unmounting
This method is called when a component is being removed from the DOM:

1. **componentWillUnmount()**
   - Perform any necessary cleanup, such as invalidating timers or canceling network requests.

## Function Components

Function components are simpler and do not have access to lifecycle methods directly. Instead, they use React Hooks to manage state and side effects.

### Hooks

#### useState
The `useState` hook lets you add state to function components.

```javascript
const [state, setState] = useState(initialState);
```


## Summary

- **Class Components**: Use ES6 classes, have lifecycle methods, and manage state.
- **Function Components**: Use functions, use hooks to manage state and side effects.

Both types of components can achieve the same functionality, but function components with hooks offer a more concise and readable way to manage state and side effects.

**lifecycle method** : [(https://medium.com/how-to-react/react-life-cycle-methods-with-examples-2bdb7465332b](https://medium.com/how-to-react/react-life-cycle-methods-with-examples-2bdb7465332b)

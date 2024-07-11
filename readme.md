### Props in React

**Props (short for properties)** are a core concept in React that allows components to receive data from their parent components. Props enable components to be dynamic and reusable by providing them with the data they need to render appropriately.

#### Key Concepts of Props:

1. **Passing Data**:
   - Props allow you to pass data from a parent component to a child component. This data can be any valid JavaScript value, such as strings, numbers, arrays, objects, or functions.

2. **Read-Only**:
   - Props are immutable, meaning that a child component cannot modify the props it receives. This ensures a one-way data flow, which helps maintain predictable behavior in the application.

3. **Defining Props**:
   - Props are defined as attributes on the child component when it is used in the parent component. They are passed as key-value pairs.

4. **Accessing Props**:
   - In a functional component, props are accessed via the function's parameters.
   - In a class component, props are accessed via `this.props`.

5. **Default Props**:
   - You can define default values for props using the `defaultProps` property on a component. This ensures that a component has default values for props that are not provided by the parent.

6. **Prop Types**:
   - Prop types allow you to specify the type of each prop a component expects, which can help catch errors during development. This is done using the `prop-types` library.

7. **Dynamic Rendering**:
   - By using props, a single component can render differently based on the values passed to it. This makes components more flexible and reusable across different parts of an application.

#### Example of Props Usage:

Given a simple component that receives and uses props:

```jsx
// Greeting.js
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```

Usage in a parent component:

```jsx
// App.js
import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
};

export default App;
```

In this example:
- The `Greeting` component receives a prop called `name`.
- The `App` component passes different values for the `name` prop to the `Greeting` component.
- Each instance of the `Greeting` component renders differently based on the `name` prop it receives.

**Task** : [text](https://themewagon.github.io/fruitables/)

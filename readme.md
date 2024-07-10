# Component and Import/Export Guide

This guide explains how to create a component and handle both default and named exports and imports in JavaScript/React.

## Creating a Component

First, let's create a simple React component.

### ExampleComponent.js

```javascript
import React from 'react';

const ExampleComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default ExampleComponent;
```

## Exporting and Importing Components

### Default Export

A default export allows you to export a single value from a file. This can be a class, function, object, or primitive value.

#### ExampleComponent.js

```javascript
import React from 'react';

const ExampleComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default ExampleComponent;
```

#### Importing a Default Export

```javascript
import ExampleComponent from './ExampleComponent';

const App = () => {
  return (
    <div>
      <ExampleComponent />
    </div>
  );
};

export default App;
```

### Named Export

A named export allows you to export multiple values from a file.

#### ExampleComponent.js

```javascript
import React from 'react';

export const ExampleComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export const AnotherComponent = () => {
  return (
    <div>
      <h1>Another Component</h1>
    </div>
  );
};
```

#### Importing Named Exports

```javascript
import { ExampleComponent, AnotherComponent } from './ExampleComponent';

const App = () => {
  return (
    <div>
      <ExampleComponent />
      <AnotherComponent />
    </div>
  );
};

export default App;
```

### Combining Default and Named Exports

You can combine default and named exports in the same file.

#### ExampleComponent.js

```javascript
import React from 'react';

const ExampleComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

const AnotherComponent = () => {
  return (
    <div>
      <h1>Another Component</h1>
    </div>
  );
};

export { ExampleComponent as default, AnotherComponent };
```

#### Importing Combined Exports

```javascript
import ExampleComponent, { AnotherComponent } from './ExampleComponent';

const App = () => {
  return (
    <div>
      <ExampleComponent />
      <AnotherComponent />
    </div>
  );
};

export default App;
```

## Conclusion

This guide covered how to create a simple React component and handle both default and named exports and imports. For more advanced usage, refer to the [React documentation](https://reactjs.org/docs/getting-started.html) and the [JavaScript modules documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

# react-toasts [![build status](https://travis-ci.org/trendmicro-frontend/react-toasts.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-toasts) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-toasts/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-toasts?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-toasts.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-toasts/)

React Toasts

Demo: https://trendmicro-frontend.github.io/react-toasts

## Installation


1. Install the latest version of [react](https://github.com/facebook/react) and [react-toasts](https://github.com/trendmicro-frontend/react-toasts):

  ```
  npm install --save react @trendmicro/react-toasts
  ```

2. Import [react-toasts](https://github.com/trendmicro-frontend/react-toasts) with <b>@trendmicro</b> scope:
  ```js
  import { ToastProvider, ToastConsumer, withToast, useToast } from '@trendmicro/react-toasts';
  ```

## Usage

Wrap your app in `ToastProvider`, which provides context to the consuming components that are descendants of the `ToastProvider`.

```jsx
import { ToastProvider, ToastConsumer } from '@trendmicro/react-toast';

const Toasts = () => (
    <ToastConsumer>
        {({ toasts, hasToast, addToast, removeToast, removeAllToasts, updateToast }) => {
            return (
                toasts.map(toast => (
                    <div key={toast.id} style={{ display: 'flex' }}>
                        <div>{toast.content}</div>
                        <button type="button" onClick={() => removeToast(toast.id)}>
                            Dismiss
                        </button>
                    </div>
                ))
            );
        }}
    </ToastConsumer>
);

const App = () => (
    <ToastProvider>
        {({ toasts, addToast, removeAllToasts }) => (
            <>
                <div>
                    <Button onClick={() => addToast('Lorem ipsum...')}>
                        Add Toast
                    </Button>
                    <Button onClick={() => removeAllToasts()}>
                        Remove All Toasts
                    </Button>
                    Toasts: {toasts.length}
                </div>
                <Toasts />
            </>
        )}
    </ToastProvider>
);
```

## Higher-Order Component

### withToast

You can get access to the toast via the `withToast` higher-order component. `withToast` will pass updated `toast` props to the wrapped component whenever it renders.

```jsx
const Component = ({
    toast,
}) => {
    const { toasts, hasToast, addToast, removeToast, removeAllToasts, updateToast } = toast;

    return <div>Toast count: {toasts.length}</div>;
};

const EnhancedComponent = withToast(Component);
```

## Hook

### useToast

The `useToast` hook returns an object where you can render toast notifications or manipulate the toast.

```jsx static
const { toasts, hasToast, addToast, removeToast, removeAllToasts, updateToast } = useToast();
```

## API

### Properties

#### `toasts`
`toasts` is an array of objects representing the current toasts.
```js static
[
    {
        id: 1,
        content: 'Unable to connect to the remote server.',
        meta: { type: 'error', title: 'Unable to connect' }
    },
    {
        id: 2,
        content: 'Settings saved.',
        meta: { type: 'success' }
    }
]
```

### Methods

#### `hasToast(id)`
The `hasToast` method returns a boolean value that indicates if the toast exists.
- `id` The id to check whether a toast exists.

#### `addToast(content, [meta], [callback])`
- `content` The content of the toast, which can be any renderable content.
- `[meta]` An optional user-defined meta data associated with the toast.
- `[callback]` An optional callback, which is passed the added toast id.

#### `removeToast(id, [callback])`
- `id` The id of the toast to remove.
- `[callback]` An optional callback, which is passed the removed toast id.

#### `removeAllToasts([callback])`
- `[callback]` An optional callback.

#### `updateToast(id, updater, [callback])`
- `id` The id of the toast to update.
- `updater` An updater function that takes the matched toast as the first argument and returns an updated toast.
- `[callback]` An optional callback, which is passed the updated toast id.

## License

MIT

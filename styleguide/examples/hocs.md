## withToast

You can get access to the toast via the `withToast` higher-order component. `withToast` will pass updated `toast` props to the wrapped component whenever it renders.

```jsx static
const Component = ({
    toast,
}) => {
    const { toasts, hasToast, addToast, removeToast, removeAllToasts, updateToast } = toast;

    return <div>Toast count: {toasts.length}</div>;
};

const EnhancedComponent = withToast(Component);
```

The `toast` prop contains the following properties and methods:

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

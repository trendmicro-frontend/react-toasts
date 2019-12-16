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

```js static
if (hasToast(toast.id)) {
    console.log(`The toast exists (${id}).`);
} else {
    console.log(`The toast does not exist (${id}).`);
}
```

#### `addToast(content, [meta], [callback])`
- `content` The content of the toast, which can be any renderable content.
- `[meta]` An optional user-defined meta data associated with the toast.
- `[callback]` An optional callback, which is passed the added toast id.

```js static
addToast('Settings saved.', { type: 'success' }, id => {
    console.log(`Added a new toast (${id}).`);
});
```

#### `removeToast(id, [callback])`
- `id` The id of the toast to remove.
- `[callback]` An optional callback, which is passed the removed toast id.

```js static
removeToast(toast.id, id => {
    console.log(`Removed a toast (${id}).`);
});
```

#### `removeAllToasts([callback])`
- `[callback]` An optional callback.

```js static
removeAllToasts(() => {
    console.log(`Removed all toasts.');
});
```

#### `updateToast(id, updater, [callback])`
- `id` The id of the toast to update.
- `updater` An updater function that takes the matched toast as the first argument and returns an updated toast.
- `[callback]` An optional callback, which is passed the updated toast id.

```js static
updateToast(toast.id, (toast) => ({
    ...toast,
    content: (
        <div>Updated content.</div>
    ),
    meta: {
        ...toast.meta,
        updatedTime: Date.now(),
    }
}), id => {
    console.log(`Updated a toast (${id}).`);
});
```

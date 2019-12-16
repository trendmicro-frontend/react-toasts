Wrap your app in `ToastProvider`, which provides context to the consuming components that are descendants of the `ToastProvider`.

## Context

```jsx
const Toasts = () => (
    <ToastConsumer>
        {({ toasts, hasToast, addToast, removeToast, removeAllToasts, updateToast }) => {
            return (
                toasts.map(toast => (
                    <Box key={toast.id} mb=".75rem" display="flex" alignItems="center" backgroundColor="#f0f0f0" px=".75rem" py=".5rem">
                        <Box mr=".75rem" flexGrow="1">[{toast.id}] {toast.content}</Box>
                        <Button onClick={() => removeToast(toast.id)}>Dismiss</Button>
                    </Box>
                ))
            );
        }}
    </ToastConsumer>
);

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget condimentum justo, eget hendrerit elit.';

<ToastProvider>
    {({ toasts, addToast, removeAllToasts }) => (
        <>
            <Box mb="1rem" display="flex" alignItems="center">
                <Box flexGrow="1">
                    <Button
                        onClick={() => addToast(content, { time: Date.now() } )}
                    >
                        Add Toast
                    </Button>
                    <Button
                        onClick={() => removeAllToasts()}
                    >
                        Remove All Toasts
                    </Button>
                </Box>
                Toasts: {toasts.length}
            </Box>
            <Toasts />
        </>
    )}
</ToastProvider>
```

## Higer-Order Component

### withToast

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

## Hook

### useToast

The `useToast` hook returns an object where you can render toast notifications or manipulate the toast.

```jsx static
const { toasts, hasToast, addToast, removeToast, removeAllToasts, updateToast } = useToast();
```

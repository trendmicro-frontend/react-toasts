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

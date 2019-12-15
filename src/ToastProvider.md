```jsx static
<ToastProvider>
    <App />
</ToastProvider>
```

You can also use the **children as a function** to pass methods and properties to the composed components.

```jsx static
<ToastProvider>
    {({ add, remove, removeAll, update, toasts }) => (
        <App />
    )}
</ToastProvider>
```

import React from 'react';
import { ToastContext } from './context';

const ToastConsumer = ({
    // eslint-disable-next-line react/prop-types
    context: Context = ToastContext,
    children,
}) => (
    <Context.Consumer>
        {context => {
            if (!context) {
                throw new Error('The `ToastConsumer` component must be called from a descendent of the `ToastProvider`.');
            }

            return (typeof children === 'function') ? children(context) : children;
        }}
    </Context.Consumer>
);

export default ToastConsumer;

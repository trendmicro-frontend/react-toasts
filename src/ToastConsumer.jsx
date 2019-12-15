import React from 'react';
import { ToastContext } from './context';

const ToastConsumer = ({
    // eslint-disable-next-line react/prop-types
    context: Context = ToastContext,
    children,
}) => (
    <Context.Consumer>
        {context => ((typeof children === 'function') ? children(context) : children)}
    </Context.Consumer>
);

export default ToastConsumer;

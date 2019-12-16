import React from 'react';
import ToastConsumer from './ToastConsumer';

const withToast = (Component) => React.forwardRef((props, ref) => (
    <ToastConsumer>
        {context => {
            if (!context) {
                throw new Error('The `withToast` HOC must be called from a descendent of the `ToastProvider`.');
            }

            return (
                <Component toast={context} {...props} ref={ref} />
            );
        }}
    </ToastConsumer>
));

export default withToast;

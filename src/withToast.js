import React from 'react';
import ToastConsumer from './ToastConsumer';

const withToast = (Component) => React.forwardRef((props, ref) => (
    <ToastConsumer>
        {context => (
            <Component toast={context} {...props} ref={ref} />
        )}
    </ToastConsumer>
));

export default withToast;

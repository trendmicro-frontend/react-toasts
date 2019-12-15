import React, { Component } from 'react';
import { ToastContext } from './context';

const uniqueId = (function() {
    let id = 0;
    return function() {
        return id++;
    };
}());

const noop = () => {};

class ToastProvider extends Component {
    hasToast = (id) => {
        if (this.state.toasts.length === 0) {
            return false;
        }

        return this.state.toasts.filter(toast => toast.id === id).length > 0;
    };

    addToast = (content, meta = {}, callback = noop) => {
        const id = uniqueId();

        if (this.hasToast(id)) {
            return;
        }

        const toast = {
            id,
            content,
            meta: { ...meta },
        };

        this.setState(state => {
            const toasts = [...state.toasts, toast];
            return { toasts };
        }, () => {
            (typeof callback === 'function') && callback(id);
        });

        /* eslint-disable-next-line consistent-return */
        return id;
    };

    removeToast = (id, callback = noop) => {
        if (!this.hasToast(id)) {
            return;
        }

        this.setState(state => {
            const toasts = state.toasts.filter(toast => (toast.id !== id));
            return { toasts };
        }, () => {
            (typeof callback === 'function') && callback(id);
        });
    };

    removeAllToasts = (callback = noop) => {
        if (this.state.toasts.length === 0) {
            return;
        }

        this.setState(state => ({
            toasts: [],
        }), () => {
            (typeof callback === 'function') && callback();
        });
    };

    updateToast = (id, updater = noop, callback = noop) => {
        if (!this.hasToast(id)) {
            return;
        }

        this.setState(state => {
            const prevToasts = state.toasts;
            const i = prevToasts.findIndex(toast => toast.id === id);
            let updatedToast = { ...prevToasts[i] };

            if (typeof updater === 'function') {
                const {
                    id = updatedToast.id,
                    content = updatedToast.content,
                    meta = updatedToast.meta,
                } = { ...updater(updatedToast) };

                updatedToast = {
                    id,
                    content,
                    meta: { ...meta },
                };
            }

            const toasts = [
                ...prevToasts.slice(0, i),
                updatedToast,
                ...prevToasts.slice(i + 1),
            ];

            return { toasts };
        }, () => {
            (typeof callback === 'function') && callback(id);
        });
    };

    state = {
        toasts: [],
        hasToast: this.hasToast,
        addToast: this.addToast,
        removeToast: this.removeToast,
        removeAllToasts: this.removeAllToasts,
        updateToast: this.updateToast,
    };

    render() {
        const {
            context: Context = ToastContext,
            children,
        } = this.props;

        return (
            <Context.Provider value={this.state}>
                {(typeof children === 'function') ? children(this.state) : children}
            </Context.Provider>
        );
    }
}

export default ToastProvider;

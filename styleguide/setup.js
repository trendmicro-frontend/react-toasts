import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import { Fragment } from 'react';
import { Button } from 'react-bootstrap-buttons';
import Box from './components/Box';
import ToastProvider from '../src/ToastProvider';
import ToastConsumer from '../src/ToastConsumer';
import useToast from '../src/useToast';
import withToast from '../src/withToast';

global.Box = Box;
global.Button = Button;
global.Fragment = Fragment;
global.ToastProvider = ToastProvider;
global.ToastConsumer = ToastConsumer;
global.useToast = useToast;
global.withToast = withToast;

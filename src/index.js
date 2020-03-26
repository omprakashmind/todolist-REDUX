import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import {Provider} from 'react-redux'
import Todo from './reducers/Todo'
import { createStore } from 'redux';

const store=createStore(Todo)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



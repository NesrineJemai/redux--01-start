import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//1st
import { createStore } from 'redux';
import reducer from './store/reducer';
//Connecting store to react
import { Provider } from 'react-redux';

//then, Create store, what about Reducer ? -> store folder
const store = createStore(reducer);

// Provider is a helper component allowing to inject the store into the react component
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();1

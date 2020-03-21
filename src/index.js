import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider }  from 'react-redux';
import store from './redux/store'
import App from './App';

import 'aos/dist/aos.css';
import "./styles/App.css"
import '../node_modules/font-awesome/css/font-awesome.min.css';

toast.configure({
    autoClose: 5000,
    position :"bottom-center",
    className:"toast-container",
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

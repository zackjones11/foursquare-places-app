import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import configureStore from './configure-store'

import App from './app'

import 'normalize.css'
import './index.css'

const initialState = {}
const store = configureStore(initialState)

const root = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(root, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store/store'

import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PersistGate persistor={ persistor }>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
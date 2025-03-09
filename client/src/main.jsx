import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import { store } from './redux/store.js'
import MainContextProvider from './context/mainContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <MainContextProvider>
    <App />
      </MainContextProvider>
    </Provider>
  </StrictMode>,
)

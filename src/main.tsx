import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux/store.tsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

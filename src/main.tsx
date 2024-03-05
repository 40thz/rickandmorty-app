import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './App.tsx';
import './index.css';
import { ErrorBoundary } from './components/shared/ui/ErrorBoundary.tsx';
import { persistor, store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary fallback={<div>Произошла ошибка</div>}>
          <App />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

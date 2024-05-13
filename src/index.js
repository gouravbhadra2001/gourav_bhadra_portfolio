import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import commonLoader from './Components/Loader/commonLoader';

const root = ReactDOM.createRoot(document.getElementById('root'));

const LazyApp = lazy(() => import('./App'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<commonLoader/>}>
        <LazyApp/>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

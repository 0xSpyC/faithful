import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import './index.css'
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import SectionSeparator from './components/SectionSeparator';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <SectionSeparator name="PRODUCTS"/>
      <ProductsPage />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

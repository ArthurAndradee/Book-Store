import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from './Context/context';
import './index.css';

import { products } from './Database/products';
import { destinations } from './Database/destinations';

import HomePage from './Pages/Home/home';
import LanguagePage from './Pages/Language/language';
import ErrorPage from './Pages/Error/error';
import ProductPage from './Pages/Product/product';
import 'bootstrap/dist/css/bootstrap.css';
import Cart from './Pages/Cart/cart';
import CategoryPage from './Pages/Categories/category';
import Wishlist from './Pages/Wishlist/wishlist';
import SearchResult from './Pages/Search/search.result';
import Checkout from './Pages/Checkout/checkout';
import OrderCompletion from './Components/Checkout/OrderCompletion/order.completion';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const productRoutes = products.map(product => ({
  path: `/products/${product.productUrl}`,
  element: <ProductPage
            id={product.id} 
            name={product.name} 
            imgLink={product.imgLink} 
            imgAlt={product.imgAlt}
            type={product.type} 
            price={product.price} 
            discountedPrice={product.discountedPrice}
            overview={product.overview}
            productUrl={product.productUrl} 
          />, 
})); 

const shippingDestinations = destinations.map(destination => ({
  path: `/checkout`,
  element: <Checkout
            id={destination.id}
            name={destination.name}
            surName={destination.surName} 
            phoneNumber={destination.phoneNumber} 
            cpf={destination.cpf} 
            cep={destination.cep} 
            address={destination.address} 
            addressNumber={destination.addressNumber}
            complement={destination.complement} 
            neighbourhood={destination.neighbourhood} 
            city={destination.city} 
            uf={destination.uf}
          />, 
})); 

const router = createBrowserRouter([{
  path: '/',
  element: <LanguagePage />,
  errorElement: <ErrorPage />
},
{
  path: '/home',
  element: <HomePage />,
  errorElement: <ErrorPage />
},
{
  path: '/search',
  element: <SearchResult/>,
  errorElement: <ErrorPage />
},
{
  path:'/wishlist',
  element: <Wishlist />,
  errorElement: <ErrorPage />
},
{
  path: '/cart',
  element: <Cart/>, 
  errorElement: <ErrorPage />
},
{
  path: '/orderCompletion',
  element: <OrderCompletion/>, 
  errorElement: <ErrorPage />
},
//-------------------------CATEGORY LINKS-------------------------
{
  path: '/ficcao-cientifica',
  element: <CategoryPage 
  type={['F']} 
  
            category={'Ficção Científica'}/>, 
},
{ 
  path: '/romance',
  element: <CategoryPage
  type={['R']} 
  
            category={'Romance'}/>, 
},
{
  path: '/nao-ficcao',
  element: <CategoryPage 
  type={['N']} 
  
            category={'Não-Ficção'}/>, 
},
{
  path: '/promocoes',
  element: <CategoryPage 
  type={['F', 'R', 'N']} 
  
            category={'Promoções'}/>, 
},
//-------------------------PRODUCT LINKS-------------------------
...productRoutes,
...shippingDestinations
])

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="225610013643-h4vjojhkbfol6ht7rnlprjbdmjpfp1tp.apps.googleusercontent.com">
      <Toaster toastOptions={{duration: 3000,style:{background: '#FFFFFF',color: '#000000'},success: {iconTheme: {primary: '#000000',secondary: '#FFFFFF'}}}}/>
      <ContextProvider>
          <RouterProvider router={router} />
      </ContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

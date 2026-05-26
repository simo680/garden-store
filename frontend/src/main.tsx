import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';

import App from './App.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage.tsx';
import BasketPage from './pages/BasketPage/BasketPage.tsx';
import ProductPage from './pages/ProductPage/ProductPage.tsx';
import { CategoryPage } from './pages/CategoryPage/CategoryPage.tsx';
import { ProductsAllPage } from './pages/ProductsAllPage/ProductsAllPage.tsx';
import { ProductsSalePage } from './pages/ProductsSalePage/ProductsSalePage.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import { setupStore } from './store/store.ts';

import './styles/index.scss';

const store = setupStore();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'categories', element: <CategoriesPage /> },
      { path: 'categories/:id', element: <CategoryPage /> },
      { path: 'products', element: <ProductsAllPage /> },
      { path: 'products/:id', element: <ProductPage /> },
      { path: 'sales', element: <ProductsSalePage /> },
      { path: 'basket', element: <BasketPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

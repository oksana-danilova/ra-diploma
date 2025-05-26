import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { Layout } from "./components/Layout/Layout";

import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Product } from "./pages/Product/Product";
import { Cart } from "./pages/Cart/Cart";

import { StaticPage } from "./pages/StaticPage/StaticPage";
import { About } from "./pages/StaticPage/About";
import { Contacts } from "./pages/StaticPage/Contacts";
import { NotFound } from "./pages/StaticPage/Notfound";

import './App.css';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Product />} />
        <Route path="/about" element={<StaticPage header="О магазине"><About /></StaticPage>} />
        <Route path="/contacts" element={<StaticPage header="Контакты"><Contacts /></StaticPage>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<StaticPage header="Страница не найдена"><NotFound /></StaticPage>} />
      </Route>
    )
  );

  return (
    <RouterProvider router={routes} />
  )
}

export default App;

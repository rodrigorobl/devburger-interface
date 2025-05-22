import { Route, Routes } from 'react-router-dom';

import {
  Cart,
  Checkout,
  CompletePayment,
  Home,
  Login,
  Menu,
  NewProducts,
  Products,
  Orders,
  Register,
  EditProducts,
} from '../containers';
import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';

export function Router() {
  return (
    <Routes>
      {/* Rotas do usuário comum */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="cardapio" element={<Menu />} />
        <Route path="carrinho" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="complete" element={<CompletePayment />} />
      </Route>

      {/* Rotas do admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="pedidos" element={<Orders />} />
        <Route path="novo-produto" element={<NewProducts />} />
        <Route path="editar-produto" element={<EditProducts />} />
        <Route path="produtos" element={<Products />} />
      </Route>

      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}

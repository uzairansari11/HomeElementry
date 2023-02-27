import React from "react";
import { Route, Routes } from "react-router-dom";
import { Appliances } from "../Pages/Appliances";
import CheckoutPage from "../Pages/CheckoutPage"
import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";

import { GiftCards } from "../Pages/GiftCards";
import { Help } from "../Pages/Help";
import { Home } from "../Pages/Home";

import { LampsLights } from "../Pages/LampsLights";
import { Login } from "../Pages/Login";
import { Mattresses } from "../Pages/Mattresses";
import { Modular } from "../Pages/Modular";
import Productpage from "../Pages/Productpage";
import { Register } from "../Pages/Register";
import { Search } from "../Pages/Search";
import { Wishlist } from "../Pages/Wishlist";
import SingleProduct from "./SingleProduct";

import HomeDeco from "../Pages/HomeDeco";
import Furniture from "../Pages/Furniture";
import Furnishing from "../Pages/Furnishing";

export const AllRoute = () => {
  return (
    <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/furniture" element={<Furniture />} />
      <Route path="/furniture/:id" element={<SingleProduct />} />

      <Route path="/homedeco" element={<HomeDeco />} />
      <Route path="/homedeco/:id" element={<SingleProduct />} />

      <Route path="/lampslighting" element={<Productpage />} />
      <Route path="/lampslighting/:id" element={<SingleProduct />} />

      <Route path="/furnishings" element={<Furnishing />} />

      <Route path="/mattresses" element={<Mattresses />} />
      <Route path="/appliances" element={<Appliances />} />
      <Route path="/modular" element={<Modular />} />
      <Route path="/giftcards" element={<GiftCards />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/help" element={<Help />} />
      <Route path="/register" element={<Register />} />

      <Route path="/payment" element={<Payment />}/>
      <Route path="/checkout" element={<CheckoutPage />}/>

      <Route path="/search" element={<Search />} />
      <Route path="/search/:id" element={<SingleProduct />} />
    </Routes>
  );
};

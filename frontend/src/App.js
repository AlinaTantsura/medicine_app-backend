import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ShoppingCard } from './pages/ShoppingCard';
import { Layout } from './components/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path=":shopId" element={<Home />} />
          <Route path="shopcard" element={<ShoppingCard />} />
        </Route>
      </Routes>
    </div>
  )
}

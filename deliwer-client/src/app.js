import Head from 'next/head';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { activeOrdersArray } from './components/dummy-data';
import './app.css';
import Bids from './components/bids/bids';
import Contact from './components/contact/contact';
import Dashboard from './components/dashboard/dashboard';
import Drivers from './components/drivers/drivers';
import Home from './components/home/home';
import Navigation from './components/navigation/navigation';
import Track from './components/track/track';
import Fonts from './styles/fonts';

const App = () => {
  const [activeOrders, setActiveOrders] = useState(activeOrdersArray.map((order) => ({ ...order, selected: false })));

  return (
    <Styles>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </Head>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/bid" exact element={<Bids activeOrders={activeOrders} setActiveOrders={setActiveOrders} />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/drivers" exact element={<Drivers />} />
          <Route path="/track" exact element={<Track activeOrdersArray={activeOrders} />} />
        </Routes>
      </BrowserRouter>
    </Styles>
  );
};

const Styles = styled.div`
  ${Fonts}
`;

export default App;

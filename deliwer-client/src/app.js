import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./app.css";
import Bid from "./components/bids/bid";
import Contact from "./components/contact/contact";
import Dashboard from "./components/dashboard/dashboard";
import Drivers from "./components/drivers/drivers";
import Home from "./components/home/home";
import Navigation from "./components/navigation/navigation";
import Track from "./components/track/track";
import Fonts from "./styles/fonts";
import Head from "next/head";

const App = () => (
  <Styles>
    <Head>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </Head>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/bid" exact element={<Bid />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/drivers" exact element={<Drivers />} />
        <Route path="/track" exact element={<Track />} />
      </Routes>
    </BrowserRouter>
  </Styles>
);

const Styles = styled.div`
  ${Fonts}
`;

export default App;

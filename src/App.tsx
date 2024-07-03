import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Games from "./games/Games";
import Nav from "./nav/Nav";
import ScrollTop from "./utility/ScrollTop";
import Prices from "./prices/Prices";
import Reservation from "./reservation/Reservation";

function App() {
  return (
    <>
      <BrowserRouter basename="/vrsziget">
        <ScrollTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jatekok" element={<Games />} />
          <Route path="/arak" element={<Prices />} />
          <Route path="/foglalas" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

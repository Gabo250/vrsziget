import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Games from "./games/Games";
import Nav from "./nav/Nav";
import ScrollTop from "./utility/ScrollTop";
import Prices from "./prices/Prices";
import Reservation from "./reservation/Reservation";
import Confirmation from "./confirmation/Confirmation";
import Cancellation from "./confirmation/Cancellation";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jatekok" element={<Games />} />
          <Route path="/arak" element={<Prices />} />
          <Route path="/foglalas" element={<Reservation />} />
          <Route path="/megerosites/*" element={ <Confirmation /> } />
          <Route path="/lemondas/*" element={ <Cancellation /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

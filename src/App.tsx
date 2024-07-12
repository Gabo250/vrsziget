import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./home/Home";
import Games from "./games/Games";
import Nav from "./nav/Nav";
import ScrollTop from "./utility/ScrollTop";
import Prices from "./prices/Prices";
import Reservation from "./reservation/Reservation";
import Confirmation from "./confirmation/Confirmation";
import Cancellation from "./confirmation/Cancellation";
import NotFound from "./NotFound";
import Login from "./adminpanel/login/Login";
import { useEffect, useState } from "react";
import DashBoard from "./adminpanel/dashboard/DashBoard";

function App() {
  const loc = useLocation();
  const [log, setLog] = useState<boolean>(false);

  useEffect(() => {
    if (loc.pathname.split("/")[1] === "admin") {
      setLog(true);
    } else if (log) {
      setLog(false);
    }
  }, [loc]);

  return (
    <>
      <ScrollTop />
      {!log ? <Nav /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jatekok" element={<Games />} />
        <Route path="/arak" element={<Prices />} />
        <Route path="/foglalas" element={<Reservation />} />
        <Route path="/megerosites/*" element={<Confirmation />} />
        <Route path="/lemondas/*" element={<Cancellation />} />
        <Route path="/admin/adminlogin" element={<Login />} />
        <Route path="/admin/dashboard" element={ <DashBoard /> } />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

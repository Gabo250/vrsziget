import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Games from "./games/Games";
import Nav from "./nav/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jatekok" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

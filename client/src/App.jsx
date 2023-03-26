import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/Navbar";
import { useSelector } from "react-redux";

import { Catalog, Orders, Login, Home } from "./components/screens";

const App = () => {
  const userLoggedIn = useSelector((state) => state.user?.currentUser?.email);
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="login" element={userLoggedIn ? <Home /> : <Login />} />
          <Route
            path="orders"
            element={userLoggedIn ? "Error page" : <Orders />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

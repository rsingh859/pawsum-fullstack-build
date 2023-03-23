import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/Navbar";
import { useSelector } from "react-redux";

import { Catalog, Contact, ErrorPage, Login, Home } from "./components/screens";

const App = () => {
  const userState = useSelector((state) => state.user);

  console.log({ userState });
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar userData={userState} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Catalog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

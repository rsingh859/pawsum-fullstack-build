import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/Navbar";

import { Catalog, Contact, ErrorPage, Login, Home } from "./components/screens";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Catalog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

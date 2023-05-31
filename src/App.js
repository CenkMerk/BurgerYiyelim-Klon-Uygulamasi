import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "animate.css";
import { Routes, Route } from "react-router-dom";
import { Anasayfa } from "./pages/Anasayfa/Anasayfa";
import { Header } from "./components/Header/Header";
import { Subelerimiz } from "./pages/Subelerimiz/Subelerimiz";
import { Hakkimizda } from "./pages/Hakkimizda/Hakkimizda";
import { Franchising } from "./pages/Franchising/Franchising";
import { HelalSertifikasi } from "./pages/HelalSertifikasi/HelalSertifikasi";
import { InsanKaynaklari } from "./pages/InsanKaynaklari/InsanKaynaklari";
import { Iletisim } from "./pages/Iletişim/Iletisim";
import { Urunler } from "./pages/Urunler/Urunler";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./Control/CartSlice";
import { useEffect } from "react";
import { Footer } from "./components/Footer/Footer";

function App() {
  const cartItem = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItem]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/BurgerYiyelim-Klon-Uygulamasi/" element={<Anasayfa />} />
        <Route path="/subelerimiz" element={<Subelerimiz />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/franchising" element={<Franchising />} />
        <Route path="/helalsertifikasi" element={<HelalSertifikasi />} />
        <Route path="/insankaynaklari" element={<InsanKaynaklari />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/urunler" element={<Urunler />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

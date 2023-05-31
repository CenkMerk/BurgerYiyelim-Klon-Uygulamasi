import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import Etustasi from "./img/etustasi.png";
import Etyiyelim from "./img/etyiyelim.png";
import Kebanet from "./img/kebanet.png";
import Kebankasap from "./img/kebankasap.png";
import Pideyiyelim from "./img/pideyiyelim.png";
import Yerliuretim from "./img/yerliuretim.png";
import Helalsertifika from "./img/helalsertifika.png";

export const Footer = () => {
  return (
    <div className="FooterComponent">
      <div className="container pt-5">
        <div class="row">
          <div class="col-md-3">
            <h4 className="FooterHeader text-white pb-2">Burger Yiyelim</h4>
            <p className="pt-2">
              Burger Yiyelim markasının tek hak sahibi Keban Et’tir. Web
              sitemizde bulunan fiyatlar şubelere, paket servis ve gel-al
              servise göre farklılık gösterebilmektedir. Burger Yiyelim tüm
              promosyonlar ve kampanyaları değiştirme ve sonlandırma hakkını
              saklı tutar.
            </p>
          </div>
          <div class="col-md-3 d-flex flex-column">
            <h4 className="FooterHeader text-white pb-2">KURUMSAL</h4>
            <NavLink to="/hakkimizda">
              <button className="btn FooterMenu">Hakkımızda</button>
            </NavLink>
            <NavLink to="/helalsertifikasi">
              <button className="btn FooterMenu">Helal Sertifikası</button>
            </NavLink>
            <NavLink to="/franchising">
              <button className="btn FooterMenu">Franchising Başvurusu</button>
            </NavLink>
            <NavLink to="/iletisim">
              <button className="btn FooterMenu">İletişim</button>
            </NavLink>
            <NavLink to="/insankaynaklari">
              <button className="btn FooterMenu">İnsan Kaynakları</button>
            </NavLink>
          </div>
          <div class="col-md-3">
            <h4 className="FooterHeader text-white pb-2">ÜRÜNLER</h4>
            <NavLink to="/urunler">
              <button className="btn FooterMenu">Menü</button>
            </NavLink>
          </div>
          <div class="col-md-3">
            <h4 className="FooterHeader text-white pb-2">İLETİŞİM</h4>
            <div>
              <CiLocationOn size={20} />
              <span className="ps-2">
                Yenibosna Merkez Mah, Kavak Sk. No:4/B, 34197
                Bahçelievler/İstanbul Bahçelievler / İstanbul
              </span>
            </div>
            <div className="pt-2">
              <CiMail size={20} />
              <span className="ps-2">destek@kebanet.com</span>
            </div>
            <div className="pt-2">
              <button className="btn rounded-circle btn-light">
                <GrFacebookOption size={20} />
              </button>
              <button className="btn rounded-circle btn-light mx-2">
                <AiOutlineInstagram size={20} />
              </button>
              <button className="btn rounded-circle btn-light">
                <TfiYoutube size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2 pt-3 flex-column flex-md-row align-items-center">
          <img
            src={Kebanet}
            alt="Kebanet"
            style={{ height: "28px", width: "auto" }}
          />
          <img
            src={Etyiyelim}
            alt="Etyiyelim"
            style={{ height: "28px", width: "auto" }}
          />
          <img
            src={Kebankasap}
            alt="Kebankasap"
            style={{ height: "42px", width: "auto" }}
          />
          <img
            src={Etustasi}
            alt="Etustasi"
            style={{ height: "28px", width: "auto" }}
          />
          <img
            src={Pideyiyelim}
            alt="Pideyiyelim"
            style={{ height: "42px", width: "auto" }}
          />
        </div>
        <p className="text-white text-center pt-3">
          Burger Yiyelim bir
          <strong style={{ color: "#f80808" }}> Keban Et</strong> kuruluşudur.
        </p>
        <p
          className="text-center py-2"
          style={{ borderTop: "1px solid #888888" }}
        >
          Powered by <span className="text-white">RestApp</span>
        </p>
        <div className="d-flex justify-content-center gap-2 py-3">
          <img
            src={Yerliuretim}
            alt="Yerliuretim"
            style={{ height: "35px", width: "auto" }}
          />
          <img
            src={Helalsertifika}
            alt="Helalsertifika"
            style={{ height: "42px", width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

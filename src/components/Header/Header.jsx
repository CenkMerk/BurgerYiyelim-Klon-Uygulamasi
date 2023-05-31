import React from "react";
import "./Header.css";
import Logo from "./burgeryiyelimlogo.png";
import { NavLink } from "react-router-dom";
import { BsFillSignpost2Fill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { GoLocation } from "react-icons/go";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid h-100">
        <NavLink className="navbar-brand" to="/">
          <img className="BurgerLogo" src={Logo} alt="logo" />
        </NavLink>
        <NavLink id="SiparisButtonTop" className="nav-link SiparisButton" to="/urunler">
          <span>ONLİNE SİPARİŞ</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 h-100 align-items-center g-2">
            <li className="nav-item NavItem">
              <NavLink className="nav-link NavButton" to="/subelerimiz">
                <BsFillSignpost2Fill size={20} color="white" />
                <span>ŞUBELERİMİZ</span>
              </NavLink>
            </li>
            <li className="nav-item dropdown NavItem">
              <NavLink
                className="nav-link dropdown-toggle NavButton"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaInfo size={20} color="white" />
                <span>HAKKIMIZDA</span>
              </NavLink>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <NavLink className="DropdownLink" to="/hakkimizda">
                    Hakkımızda
                  </NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="DropdownLink" to="/franchising">
                    Franchising Başvurusu
                  </NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="DropdownLink" to="/helalsertifikasi">Helal Sertifikamız</NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="DropdownLink" to="/insankaynaklari">İnsan Kaynakları</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item NavItem">
              <NavLink className="nav-link NavButton" to="/urunler">
                <ImSpoonKnife size={20} color="white" />
                <span>ÜRÜNLER</span>
              </NavLink>
            </li>
            <li className="nav-item NavItem">
              <NavLink className="nav-link NavButton" to="/iletisim">
                <GoLocation size={20} color="white" />
                <span>İLETİŞİM</span>
              </NavLink>
            </li>
            <li className="nav-item NavSiparis">
              <NavLink className="nav-link SiparisButton" to="/urunler">
                <span>ONLİNE SİPARİŞ</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

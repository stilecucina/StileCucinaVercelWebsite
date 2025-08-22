import React from "react";
import "./sidebar.css"; // CSS dosyasını ayrıca oluşturacağız
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={require("./pictures/logo.png")} width={200} alt="logo"/>
      <ul className="sidebar-list">
        <Link
          to={`/`} 
          style={{ textDecoration: "none", color: "black"}}
        >
        <li className="sidebar-item">Ürünler</li></Link>
        <ul className="cetegories">
          {/* <li className="dropdown-item">Saklama Kapları</li>
          <li className="dropdown-item">Diğer Mutfak Gereçleri</li>
          <li className="dropdown-item">Makyaj Organizerleri</li>
          <li className="dropdown-item">Mini El ve Masa Fanları</li> */}
        </ul>
        <Link
          to={`/contact`} 
          style={{ textDecoration: "none", color: "black"}}
        >
        <li className="sidebar-item">İletişim</li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;

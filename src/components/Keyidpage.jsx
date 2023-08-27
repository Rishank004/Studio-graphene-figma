import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/Keyidpage.css";

const Keyidpage = (el) => {
  return (
    <div key={el.id}>
      <div className="display-data">
        <img className="api-image" src={el.category.image} />
        <p className="pd-name">{el.category.name}</p>
        <p className="pd-des">{el.description}</p>
        <p className="pd-price">${el.price}</p>
      </div>
    </div>
  );
};

export default Keyidpage;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/products.css";
import axios from "axios";

import Keyidpage from "./Keyidpage";

function Products() {
  const [data, setData] = useState([]);
  // const [filterData, setFilterData] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [filters, setfilters] = useState(false);

  useEffect(() => {
    handleGetData();
  }, [setData]);

  const handleGetData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 3.3,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handleFilter = (name) => {
    setfilters(true);
    let newData = data.filter((e) => {
      if (e.category.name === name) {
        return e;
      }
      if (!name) {
        return e;
      }
      return;
    });
    setfilterData(newData);
    // console.log(newData);
  };
  return (
    <div className="productpage">
      <div className="newproducts">New products</div>
      <div className="underline"></div>
      <div className="displaydata">
        <div className="category">
          <p onClick={() => handleFilter()}>Apparel</p>
          <p onClick={() => handleFilter("Accessories")}>Accessories</p>
          <p onClick={() => handleFilter("Best-sellers")} name="Best sellers">
          Best sellers
          </p>
          <p onClick={() => handleFilter("off")} name="offer">
          50% off
          </p>
          
        </div>
        <div className="apidata">
          <div>
          <Slider {...settings}>
  {!filters
    ? data.map((el) => {
        return <Keyidpage key={el.id} {...el} />;
      })
    : filterData.map((e) => <Keyidpage key={e.id} {...e} />)}
</Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

//--------------------------------------------------------------------------------

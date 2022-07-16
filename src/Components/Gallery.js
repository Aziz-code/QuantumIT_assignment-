import React from "react";
import { MdConstruction } from "../../node_modules/react-icons/md";
import { BsSunglasses } from "../../node_modules/react-icons/bs";
import { BsTools } from "../../node_modules/react-icons/bs";

import { AiFillCloud } from "../../node_modules/react-icons/ai";

const Gallery = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row icons ">
          <div className="col-lg-3 col-md-3 col-12">
            <MdConstruction id="i1" />
            <p>
              <strong> Construc</strong>tion
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <AiFillCloud id="i2" />
            <p>
              <strong>Dummy</strong>Logo
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <BsSunglasses id="i3" />
            <p>
              Random<strong>Logo</strong>
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <BsTools id="i4" />
            <p>
              Random<strong>Brand</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

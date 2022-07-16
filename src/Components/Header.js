import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Components/header.css";
import { BsFillClockFill } from "../../node_modules/react-icons/bs";
import { BsTwitter } from "../../node_modules/react-icons/bs";
import { GrMail } from "../../node_modules/react-icons/gr";
import { GrLinkedinOption } from "../../node_modules/react-icons/gr";
import { FaFacebookF } from "../../node_modules/react-icons/fa";
import { AiFillInstagram } from "../../node_modules/react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container-fluid p-0 m-0 ">
          <div className="row m-0">
            <div className="col-lg-6 col-md-6 col-6 mail">
              <BsFillClockFill /> We are open 24/7 | <GrMail /> mail@mail.com
            </div>
            <div className="col-lg-6 col-md-6 col-6 social">
              <BsTwitter /> <span /> <GrLinkedinOption /> <span />{" "}
              <FaFacebookF /> <span /> <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

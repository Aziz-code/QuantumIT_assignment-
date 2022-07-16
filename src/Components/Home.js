import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bg from "../Assets/img.png";
const Home = () => {
  return (
    <>
      <div id="home">
        <div className="container p-0 m-0">
          <div className="row m-0">
            <div className="col-lg-6 col-md-6 col-12 order-2 order-lg-1 order-md-1 msg">
              <p className="p1">Ki Name Dhake Bolbo Tomake</p>
              <h1 className="tagLine my-1">
                We Are Consulting For Your Business Finances
              </h1>
              <p className="p2 my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
              <div className="btn-start my-3">Start Now</div>
            </div>

            <div className="col-lg-6 col-md-6 order-1 img">
              <img src={bg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

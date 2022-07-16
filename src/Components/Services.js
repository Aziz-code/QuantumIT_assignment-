import React from "react";
import ci1 from "../Assets/ci1.png";
import { TbSpeakerphone } from "../../node_modules/react-icons/tb";
import { TbPlant } from "../../node_modules/react-icons/tb";
import { SiReadthedocs } from "../../node_modules/react-icons/si";
const Services = () => {
  return (
    <>
      <div id="services">
        <div className="heading">
          <h4 className="underline">Our Services</h4>
        </div>
        <p className="p">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry.
        </p>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="main">
                <TbPlant className="tb" />
                <p className="cardHead">Financial Consultancy</p>
                <p className="ps">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry. Lorem
                  Ipsum is simply dummy text of the{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 ">
              <div className="main">
                <TbSpeakerphone className="tb" />
                <p className="cardHead">Content Marketing</p>
                <p className="ps">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry. Lorem
                  Ipsum is simply dummy text of
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="main">
                <SiReadthedocs className="tb" />
                <p className="cardHead">Finance Advice</p>
                <p className="ps">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry. Lorem
                  Ipsum is simply dummy text of
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="btn-start sb my-3">All Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;

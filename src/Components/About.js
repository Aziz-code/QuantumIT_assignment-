import React from "react";
import vid from "../Assets/video.png";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="container py-5">
          <div className="row m-0">
            <div className="col-lg-6 col-md-6 col-12 order-2 order-lg-1 order-md-1 msg">
              <h3 className="tagLine my-2">
                We have many years of experience in cunsultant Business
              </h3>
              <p className="p2 my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="btn-start my-3">Know More</div>
            </div>

            <div className="col-lg-6 col-md-6 order-1 vid">
              <img src={vid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

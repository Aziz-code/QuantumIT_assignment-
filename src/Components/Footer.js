import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer  ">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <h4 className="fh">
                Subscribe To Our Newsletter For More Updates
              </h4>
              <p className="fp">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry. Lorem Ipsum is
                simply dummy text of
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <form className="form">
                <input type="text" placeholder="Enter Your Mail"></input>
                <div className="btn-start button ">Subscribe</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import bannerImage from "../../../assets/bannerImage.png"
import './Banner.css'

const Banner = () => {
  return (
    <div  className=" container-fluid text-center mt-5 text-white ">
      <div className="row " >
        <div className="col-sm-12  col-md-12 col-lg-6  left-div rounded-start ">
          <div className="text-start ms-5 mt-5">
          <h2 style={{fontSize:"45px"}} className="fw-bolder">Deliver Food To Your <br /> Door Step|</h2>
            <p style={{fontSize:"20px"}} className="mt-5">Authentic Food,|Quick Service, Fast Delivery</p>
          </div>

        </div>

        <div className="col-sm-12  col-md-12 col-lg-6  right-div rounded-end ">
            <div >
            <img className="img-fluid" src={bannerImage} alt="" />

            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

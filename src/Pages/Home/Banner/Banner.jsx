import React from "react";
import bannerImage from "../../../assets/bannerImage.png"

const Banner = () => {
  return (
    <div style={{backgroundColor:"#FFA500	"}} className="rounded container-fluid text-center mt-5 text-white ">
      <div className="row">
        <div className="col-sm-12  col-md-12 col-lg-6  ">
          <div style={{margin:"80px"}} className="text-start">
          <h2 className="fw-bolder fs-2">Deliver Food To Your <br /> Door Step|</h2>
            <p className="mt-5">Authentic Food| Quick Service, Fast Delivery</p>
          </div>

        </div>

        <div className="col-sm-12  col-md-12 col-lg-6">
            <div style={{marginRight:"60px", }} >
            <img className="img-fluid" src={bannerImage} alt="" />

            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import footerImage from "../../../assets/footerImage.png";
import { FaArrowRight, FaGoogle, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa6";
import "./Footer.css";
import { LuUser } from "react-icons/lu";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#FFA500",marginTop:"100px" }}
      className=" container-fluid text-center  text-white  "
    >
      <div className="row ">
        <div className="col-sm-12  col-md-12 col-lg-6   ">
          {/* email box */}
          <div style={{marginTop:"80px"}} className="input-group  centering-leftdiv">
            <div className="">
              <input
                type="text"
                className="form-control inputField-width"
                id="floatingInputGroup1"
                placeholder="Enter Your Email Here"
              />
            </div>
            <span
              style={{ backgroundColor: "#FF4500" }}
              className="input-group-text text-white "
            >
              Subscribe
              <FaArrowRight className="ms-2 " />{" "}
            </span>
          </div>

          {/* social media */}

          <div style={{marginTop:"120px"}} className="row centering-leftdiv  ">
            <div className="col text-black text-start">
              <h1 className="fw-bolder">
                pti<span style={{ color: "#FF4500" }}>.</span>
              </h1>
              <p className="ms-2 mt-4 ">CopyrightcTripp.All Right Reserved</p>
            </div>
            <div style={{marginTop:"70px" }} className="col text-end">
              <FaGoogle
                style={{ backgroundColor: "#FFE4B5	",color:"#FF4500" }}
                className="ms-auto  p-2 fs-2 rounded-circle"
              />
              <FaTwitter
                style={{ backgroundColor: "#FFE4B5	",color:"#FF4500" }}
                className="ms-3   p-1 fs-2 rounded-circle  "
              />
              <FaInstagram
                style={{ backgroundColor: "#FFE4B5	",color:"#FF4500" }}
                className=" ms-3  p-1 fs-2 rounded-circle  "
              />
            </div>
          </div>
        </div>

        <div className="col-sm-12  col-md-12 col-lg-6 mb-5  ">
          <div className="">
            <img
              style={{ width: "50%" }}
              className="img-fluid "
              src={footerImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

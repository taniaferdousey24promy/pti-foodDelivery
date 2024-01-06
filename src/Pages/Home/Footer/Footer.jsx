import React from "react";
import {
  FaArrowRight,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import "./Footer.css";
import { PiCopyrightLight } from "react-icons/pi";
import footerImage from "../../../assets/footerImage.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFA500",
        marginTop: "100px",
        
      }}
      className=" "
    >
      {/* div cor container */}
      <div className="container ">
        <div className="row   container-style ">
          {/* div for left side */}
          <div
            style={{ paddingTop: "50px" }}
            className="col-lg-7 col-sm-12 sol-md-12 "
          >
            {/* div for email input */}
            <div style={{}} className="input-group input-field-style  ">
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

            {/* div for logo and social icons */}

            <div className="mt-5 text-black row">
              {/* div for logo */}
              <div className="col-lg-6 col-md-12 col-sm-12 logo-style">
                <h1 className="fw-bolder">
                  pti<span style={{ color: "#FF4500" }}>.</span>
                </h1>
                <p className=" ">
                  Copyright
                  <PiCopyrightLight />
                  Tripp.All Right Reserved
                </p>
              </div>

              {/* div for icons */}
              <div className="icon-style col-lg-6 col-md-12 col-sm-12  ">
                <FaGoogle
                  className="ms-auto  p-1 fs-2 rounded-circle icon"
                />
                <FaTwitter
                  
                  className="ms-3   p-1 fs-2 rounded-circle icon  "
                />
                <FaInstagram
                  
                  className=" ms-3  p-1 fs-2 rounded-circle  icon"
                />
                {/* <FaGoogle
                  style={{ backgroundColor: "#FFE4B5	", color: "#FF4500" }}
                  className="ms-auto  p-2 fs-2 rounded-circle"
                />
                <FaTwitter
                  style={{ backgroundColor: "#FFE4B5	", color: "#FF4500" }}
                  className="ms-3   p-1 fs-2 rounded-circle  "
                />
                <FaInstagram
                  style={{ backgroundColor: "#FFE4B5	", color: "#FF4500" }}
                  className=" ms-3  p-1 fs-2 rounded-circle  "
                /> */}
              </div>
            </div>
          </div>
          {/* div for right side */}
          <div className="col-lg-5 col-sm-12 col-md-12 ">
            <img className="img-fluid img-style " src={footerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// paddingLeft:"100px"

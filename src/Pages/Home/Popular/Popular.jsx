import { useContext, useState } from "react";
import { AppContext } from "../../../AppProvider/AppProvider";
// delete later
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./styles.css";
import ReactHookForm from "../../../Components/ReactHookForm";



const Popular = () => {
  const allData = useContext(AppContext);
  console.log(allData);

  const popularData = allData.slice(1);
  console.log(popularData);

  const recommendedData = allData.slice(2, 8);
  console.log(recommendedData);


  // delete later

  // let urls = [];
  // allData.forEach((element) => {
  //   urls.push(element.ImageUrl);
  // });
  // console.log(urls);
  const [show, setShow] = useState(false);
  const handleShowModal = () => setShow(true);



  return (
    <div style={{ marginTop: "100px", marginBottom: "200px" }}>
      {/* Popular section */}

      <div style={{ marginTop: "100px" }}>
        <div className="d-flex  me-3 ">
          <h3 className="me-auto ">Popular</h3>

          <button
            onClick={handleShowModal}
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>
          {show && (
            <div
              className="modal fade "
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className=" modal-title fs-5" id="exampleModalLabel">
                      Add New Food Item
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* na */}
                    <ReactHookForm></ReactHookForm>

                  </div>
                  
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-4 "
          >
            {popularData.map((data) => (
              <SwiperSlide className="" key={data} data={data}>
                <div style={{ width: "300px", height: "200px" }}>
                  <img
                    className=" rounded img-fluid    "
                    src={data.ImageUrl}
                    alt=""
                  />
                  <p className=" fs-6 fw-light">{data.Name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* recommended section */}
      <div style={{ marginTop: "100px" }}>
        <div className="d-flex  me-3">
          <h3 className="me-auto ">Recommended</h3>

          <button
            onClick={handleShowModal}
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>
          {show && (
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Add New Food Item
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <ReactHookForm></ReactHookForm>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-4 "
          >
            {recommendedData.map((data) => (
              <SwiperSlide className="" key={data} data={data}>
                <div style={{ width: "300px", height: "200px" }}>
                  <img
                    className=" rounded img-fluid    "
                    src={data.ImageUrl}
                    alt=""
                  />
                  <p className=" fs-6 fw-light">{data.Name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Popular;

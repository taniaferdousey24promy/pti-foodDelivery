import { useContext } from "react";
import { AppContext } from "../../../AppProvider/AppProvider";
import { PiBracketsAngleLight } from "react-icons/pi";
// delete later
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./styles.css";
const Popular = () => {
  const allData = useContext(AppContext);
  console.log(allData);

  const popularData = allData.slice(1);
  console.log(popularData);

  const recommendedData = allData.slice(2, 8);
  console.log(recommendedData);

  // delete later

  let urls = [];
  allData.forEach((element) => {
    urls.push(element.ImageUrl);
  });
  console.log(urls);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div style={{ marginTop: "100px", marginBottom: "200px" }}>
      {/* Popular section */}
      
      <div style={{ marginTop: "100px" }}>
        <div className="d-flex  me-3">
          <h3 className="me-auto ">Popular</h3>
          <p style={{ color: "#FFA500" }} className="me-2 fw-semibold">
            AddMore
          </p>
          <PiBracketsAngleLight className="mt-1 fw-bold" />
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
                <div style={{ width: "300px", height: "300px" }}>
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
          <p style={{ color: "#FFA500" }} className="me-2 fw-semibold">
            AddMore{" "}
          </p>
          <PiBracketsAngleLight className="mt-1 fw-bold" />
        </div>{" "}
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
                <div style={{ width: "300px", height: "300px" }}>
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

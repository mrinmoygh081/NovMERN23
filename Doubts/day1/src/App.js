// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
            autoplay: false,
          },
          799: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div
            className="container"
            style={{ backgroundColor: "#c9fffa", padding: "180px 30px" }}
          >
            <div className="row align-items-center">
              <div className="col-md-6 col-12">
                <h3>Hello World</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  aspernatur impedit porro magnam suscipit est maiores
                  architecto quos aperiam veniam consectetur delectus, animi
                  fuga tenetur id vitae, harum magni quasi?
                </p>
              </div>
              <div className="col-md-6 col-12">
                <img
                  src="https://via.placeholder.com/850x350"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="container"
            style={{ backgroundColor: "#c9fffa", padding: "180px 30px" }}
          >
            <div className="row align-items-center">
              <div className="col-md-6 col-12">
                <h3>Hello World</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  aspernatur impedit porro magnam suscipit est maiores
                  architecto quos aperiam veniam consectetur delectus, animi
                  fuga tenetur id vitae, harum magni quasi?
                </p>
              </div>
              <div className="col-md-6 col-12">
                <img
                  src="https://via.placeholder.com/850x350"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="container"
            style={{ backgroundColor: "#c9fffa", padding: "180px 30px" }}
          >
            <div className="row align-items-center">
              <div className="col-md-6 col-12">
                <h3>Hello World</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  aspernatur impedit porro magnam suscipit est maiores
                  architecto quos aperiam veniam consectetur delectus, animi
                  fuga tenetur id vitae, harum magni quasi?
                </p>
              </div>
              <div className="col-md-6 col-12">
                <img
                  src="https://via.placeholder.com/850x350"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="container"
            style={{ backgroundColor: "#c9fffa", padding: "180px 30px" }}
          >
            <div className="row align-items-center">
              <div className="col-md-6 col-12">
                <h3>Hello World</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  aspernatur impedit porro magnam suscipit est maiores
                  architecto quos aperiam veniam consectetur delectus, animi
                  fuga tenetur id vitae, harum magni quasi?
                </p>
              </div>
              <div className="col-md-6 col-12">
                <img
                  src="https://via.placeholder.com/850x350"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="next py-5 my-5">this is our next section</div>
      <div className="next py-5 my-5">this is our next section</div>
      <div className="next py-5 my-5" data-aos="fade-left">
        this is our next section
      </div>
      <div className="next py-5 my-5">this is our next section</div>
      <div className="next py-5 my-5">this is our next section</div>
      <div className="next py-5 my-5">this is our next section</div>
      <img
        src="https://via.placeholder.com/850x350"
        className="w-50"
        data-aos="flip-right"
        alt=""
      />
    </>
  );
}

export default App;

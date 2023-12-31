import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CatComp from "../components/CatComp";

const Home = () => {
  return (
    <>
      <Header link="Demo Link" />
      <main>
        <section id="image_gallery">
          <div className="slideshow-container">
            <div className="mySlides fade">
              <div className="numbertext">1 / 3</div>
              <img
                src="./images/new-cars-model/ncm1.png"
                style={{ width: "100%", height: "465px", borderRadius: "12px" }}
              />
              <div className="text">Caption Text</div>
            </div>
            <div className="mySlides fade">
              <div className="numbertext">2 / 3</div>
              <img src="./Images/new-cars-model/ncm2.png" />
              <div className="text">Caption Two</div>
            </div>
            <div className="mySlides fade">
              <div className="numbertext">3 / 3</div>
              <img
                src="./images/new-cars-model/ncm3.png"
                style={{ width: "100%", height: "465px", borderRadius: "12px" }}
              />
              <div className="text">Caption Three</div>
            </div>
            <a className="prev">❮</a>
            <a className="next">❯</a>
          </div>
          <br />

          {/* <div style={{ textAlign: "center" }}>
            <span className="dot" onClick="currentSlide(1)"></span>
            <span className="dot" onClick="currentSlide(2)"></span>
            <span className="dot" onClick="currentSlide(3)"></span>
          </div> */}
        </section>
        <hr />

        <section id="productlist" className="py-5">
          <div className="prod_list">
            <h1>Product List</h1>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="gallary">
                  <div className="gallary_i">
                    <img src="./images/featured-cars/fc1.png" alt="" />
                    <hr />
                    <div className="img_des">
                      <p>Model:2017 3100 Mi 240HP Automatic</p>
                    </div>
                  </div>

                  <div className="img_about">
                    <h1>Infiniri Z5</h1>
                    <h3>$36,850</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="gallary">
                  <div className="gallary_i">
                    <img src="./images/featured-cars/fc5.png" alt="" />
                    <hr />
                    <div className="img_des">
                      <p>Model:2017 3100 Mi 240HP Automatic</p>
                    </div>
                  </div>

                  <div className="img_about">
                    <h1>Infiniri Z5</h1>
                    <h3>$36,850</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="gallary">
                  <div className="gallary_i">
                    <img src="./images/featured-cars/fc2.png" alt="" />
                    <hr />
                    <div className="img_des">
                      <p>Model:2017 3100 Mi 240HP Automatic</p>
                    </div>
                  </div>

                  <div className="img_about">
                    <h1>Infiniri Z5</h1>
                    <h3>$36,850</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="gallary">
                  <div className="gallary_i">
                    <img src="./images/featured-cars/fc3.png" alt="" />
                    <hr />
                    <div className="img_des">
                      <p>Model:2017 3100 Mi 240HP Automatic</p>
                    </div>
                  </div>

                  <div className="img_about">
                    <h1>Infiniri Z5</h1>
                    <h3>$36,850</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="gallary">
                  <div className="gallary_i">
                    <img src="./images/featured-cars/fc4.png" alt="" />
                    <hr />
                    <div className="img_des">
                      <p>Model:2017 3100 Mi 240HP Automatic</p>
                    </div>
                  </div>

                  <div className="img_about">
                    <h1>Infiniri Z5</h1>
                    <h3>$36,850</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="gallary">
                  <div className="gallary_i">
                    <img src="./images/featured-cars/fc5.png" alt="" />
                    <hr />
                    <div className="img_des">
                      <p>Model:2017 3100 Mi 240HP Automatic</p>
                    </div>
                  </div>

                  <div className="img_about">
                    <h1>Infiniri Z5</h1>
                    <h3>$36,850</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="gallary">
                  <div className="gallary_i">
                    <img src="./images/featured-cars/fc6.png" alt="" />
                    <hr />
                    <div className="img_des">
                      <p>Model:2017 3100 Mi 240HP Automatic</p>
                    </div>
                  </div>

                  <div className="img_about">
                    <h1>Infiniri Z5</h1>
                    <h3>$36,850</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="gallary">
                  <div className="gallary_i">
                    <img src="./images/featured-cars/fc3.png" alt="" />
                    <hr />
                    <div className="img_des">
                      <p>Model:2017 3100 Mi 240HP Automatic</p>
                    </div>
                  </div>

                  <div className="img_about">
                    <h1>Infiniri Z5</h1>
                    <h3>$36,850</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="gallary">
                  <div className="gallary_i">
                    <img src="./images/featured-cars/fc7.png" alt="" />
                    <hr />
                    <div className="img_des">
                      <p>Model:2017 3100 Mi 240HP Automatic</p>
                    </div>
                  </div>

                  <div className="img_about">
                    <h1>Infiniri Z5</h1>
                    <h3>$36,850</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Category">
          <div className="container">
            <div className="Category_h1">
              <hr />
              <h1>Catagory</h1>
            </div>
            <div className="row">
              <CatComp
                heading="Advanced Fullstack Web-dev"
                para="Tech Pathshala provides best MERN course in the World!"
              />
              <CatComp
                heading="Ethical Hacking Masterclass"
                para="Lorejkf asldfj ldsf slkdfklsdlf!"
              />
              <CatComp
                heading="Abhinash is the coolest boy in the class"
                para="Hello, Yes this is absolutely right."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import { FaHeartBroken } from "react-icons/fa";

const Support = () => {
  const [form, setForm] = useState({
    fullName: "",
    emailId: "",
    query: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  console.log(form);

  return (
    <>
      <section className="support">
        <div className="container">
          <div className="support_card">
            <div className="title">
              <h2>
                <span>Help & Support</span>
                <FaHeartBroken />
              </h2>
              <p>Please don't hesitate to contact us</p>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="name"
                    className="form-control"
                    onChange={handleInputChange}
                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="emailId"
                    id="email"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-2">
                  <label htmlFor="query">Your query</label>
                  <input
                    type="text"
                    name="query"
                    id="query"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="submit">
              <button className="btn_style">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;

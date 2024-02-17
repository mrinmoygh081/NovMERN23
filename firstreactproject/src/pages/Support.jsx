import React, { useState } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { toast } from "react-toastify";

const Support = () => {
  const [form, setForm] = useState({
    fullName: "",
    emailId: "",
    query: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    const { fullName, emailId, phoneNumber, query } = form;
    if (!fullName || !emailId || !phoneNumber || !query) {
      toast.warn("Please enter all required fields!!");
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(form);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/v1/createFormForMongoDb", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status) {
          toast.success(result.msg);
          setForm({
            fullName: "",
            emailId: "",
            query: "",
            phoneNumber: "",
          });
        } else {
          toast.error(result.msg);
        }
      })
      .catch((error) => console.log("error", error));
  };

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
            <form onSubmit={submitHandler} method="POST">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-2">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="name"
                      className="form-control"
                      value={form?.fullName}
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
                      value={form?.emailId}
                      className="form-control"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-2">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={form?.phoneNumber}
                      id="phone"
                      className="form-control"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-2">
                    <label htmlFor="query">Your query</label>
                    <input
                      type="text"
                      name="query"
                      id="query"
                      className="form-control"
                      value={form?.query}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="submit">
                <button className="btn_style">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;

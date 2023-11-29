import React, { useState } from "react";
import Header from "../components/Header";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  console.log("Value of form: " + JSON.stringify(form));

  return (
    <>
      <Header />
      <div className="container">
        <h1 style={{ color: "#000" }}>Contact Page</h1>
        <label style={{ color: "#000" }}>Your Name</label> <br />
        <input
          type="text"
          placeholder="Enter your name..."
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br /> <br />
        <label style={{ color: "#000" }}>Your email</label> <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
    </>
  );
};

export default Contact;

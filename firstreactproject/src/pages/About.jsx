import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const About = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    let requestOptions = {
      method: "GET",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };
  // getData();

  useEffect(() => {
    getData();
  }, []);

  console.log(Math.random(), data);

  return (
    <>
      <Header />
      <h1 style={{ color: "#000" }}>About Page</h1>
    </>
  );
};

export default About;

import React, { Fragment, useEffect, useState } from "react";

const Recap = () => {
  const [data, setData] = useState(null);

  console.log(data);

  // API Call
  const getAPI = () => {
    let requestOptions = {
      method: "GET",
    };

    fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
        consequatur sint eaque officia, dolorem perspiciatis aliquam! Quibusdam
        sed fugit a provident. Delectus sapiente impedit nihil iusto modi
        nesciunt suscipit eius?
      </p>
      {data &&
        data.map((item, index) => {
          return (
            <Fragment key={index}>
              <h1>{item.username}</h1>
              <ul>
                <li>Email: {item.email}</li>
                <li>Phone: {item.phone}</li>
                <li>Website: {item.website}</li>
              </ul>
            </Fragment>
          );
        })}
    </>
  );
};

export default Recap;

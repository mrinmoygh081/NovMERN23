import React, { useEffect, useState } from "react";

const Details = () => {
  const [data, setData] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const getData = () => {
    let requestOptions = {
      method: "GET",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, [isActive]);

  console.log(data);

  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>Activity Change</button>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="card my-3 p-2">
              <h2> Heading</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                ex quod voluptatibus ab officiis sint, impedit vitae quis
                aliquid laudantium, rerum aspernatur molestias, necessitatibus
                quam. Dolore molestias natus magnam eos?
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card my-3 p-2">
              <h2> Heading</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                ex quod voluptatibus ab officiis sint, impedit vitae quis
                aliquid laudantium, rerum aspernatur molestias, necessitatibus
                quam. Dolore molestias natus magnam eos?
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card my-3 p-2">
              <h2> Heading</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                ex quod voluptatibus ab officiis sint, impedit vitae quis
                aliquid laudantium, rerum aspernatur molestias, necessitatibus
                quam. Dolore molestias natus magnam eos?
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card my-3 p-2">
              <h2> Heading</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                ex quod voluptatibus ab officiis sint, impedit vitae quis
                aliquid laudantium, rerum aspernatur molestias, necessitatibus
                quam. Dolore molestias natus magnam eos?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

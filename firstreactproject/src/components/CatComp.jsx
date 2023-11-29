import React from "react";

const CatComp = ({ heading, para }) => {
  return (
    <>
      <div className="col-12 col-md-6">
        <div className="Category_gallery">
          <div className="C_g">
            <div className="Category_content">
              <h1>{heading}</h1>

              <p>{para}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatComp;

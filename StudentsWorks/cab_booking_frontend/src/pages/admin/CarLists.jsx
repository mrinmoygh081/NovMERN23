import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Fragment, useEffect, useState } from "react";
import { apiCallFun } from "../../utils/fetchAPIs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const CarList = () => {
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);

  const getData = async () => {
    const d = await apiCallFun("GET", "admin/getAllVehicle", null, token);
    if (d.status) {
      setData(d.data);
    } else {
      toast.warn(d.msg);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="fixed-nav sticky-footer bg-dark" id="page-top">
      <Header />
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">CarList</li>
          </ol>

          <div className="card mb-3 overflow">
            <div className="card-header">
              <Link to={"/admin/cars/add"} className="btn btn-primary">
                Add New &nbsp; <i className="fa fa-plus" aria-hidden="true"></i>
              </Link>
              <form className="form-inline my-2 my-lg-0 mr-lg-2">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search for..."
                  />
                  <span className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead className="text-center">
                    <tr>
                      <th>Model</th>
                      <th>Image</th>
                      <th>Type</th>
                      <th>Capacity</th>
                      <th>Color</th>
                      <th>Fare</th>
                      <th>License No.</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Model</th>
                      <th>Image</th>
                      <th>Type</th>
                      <th>Capacity</th>
                      <th>Color</th>
                      <th>Fare</th>
                      <th>License No.</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody className="text-center">
                    {data &&
                      data.map((item, i) => (
                        <Fragment key={i}>
                          <tr>
                            <td>{item?.model}</td>
                            <td className="max_200">
                              <img
                                src={`${import.meta.env.VITE_BACKEND_FILEPATH}${
                                  item?.car_image
                                }`}
                                alt={`${item?.car_image}`}
                                className="w-100"
                              />
                            </td>
                            <td>{item?.type}</td>
                            <td>{item?.capacity}</td>
                            <td>{item?.color}</td>
                            <td>{item?.fare}</td>
                            <td>{item?.license_no}</td>
                            <td>
                              {/* <button
                                type="button"
                                className="btn btn-success me-2"
                              >
                                <i className="fa fa-pencil"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-success me-2"
                              >
                                <i className="fa fa-pencil"></i>
                              </button> */}
                              <button type="button" className="btn btn-danger">
                                <i className="fa fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </Fragment>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>

        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>Copyright © Digipro Design</small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

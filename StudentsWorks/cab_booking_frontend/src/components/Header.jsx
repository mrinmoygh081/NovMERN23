// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { logoutHandler } from "../redux/slices/loginSlice";

const Header = () => {
  //   const dispatch = useDispatch();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <Link className="navbar-brand" to="/admin">
          DASHBOARD
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                <i className="fa fa-fw fa-dashboard"></i>
                <span className="nav-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/bookings">
                <i className="fa fa-fw fa-table"></i>
                <span className="nav-link-text">Bookings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/cars">
                <i className="fa fa-fw fa-table"></i>
                <span className="nav-link-text">Cars</span>
              </Link>
            </li>
            <li className="nav-item">
              {/* <button
                className="nav-link"
                onClick={() => dispatch(logoutHandler())}
              >
                <i className="fa fa-fw fa-table"></i>
                <span className="nav-link-text">Logout</span>
              </button> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

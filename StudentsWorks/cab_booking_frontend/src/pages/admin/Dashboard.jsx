import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../../redux/slices/loginSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  return (
    <div>
      Dashboard
      <br />
      <p>{token}</p> <br />
      <button onClick={() => dispatch(logoutHandler())}>Logout</button>
    </div>
  );
}

export default Dashboard;

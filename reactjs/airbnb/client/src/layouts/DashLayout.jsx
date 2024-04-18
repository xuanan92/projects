import { Outlet } from "react-router-dom";

const DashLayout = () => (
  <>
    <div>
      <h1>Welcome __username__ to DashLayout</h1>
      <Outlet />
    </div>
  </>
);

export default DashLayout;

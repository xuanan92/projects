import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="p-0 m-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

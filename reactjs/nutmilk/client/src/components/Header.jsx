import { Close, Menu, Search, ShoppingCart } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1080) {
        setOpenMenu(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openMenu]);

  return (
    <header>
      <h6 className="p-2 text-center text-green-700 bg-green-100">
        Giao hàng siêu tốc trong 2h tại Hà Nội
      </h6>

      <section className="text-white bg-[#12433d] h-[100px] flex items-center">
        <div className="flex justify-between items-center m-auto w-7/12">
          <figure className="flex flex-row flex-grow gap-4 items-center px-4">
            <img src="preelover.png" alt="logo" width="80px" height="80px" />
          </figure>

          <div className="flex relative flex-grow gap-12 items-center text-white">
            <div className="flex-auto"></div>
            <ul
              className={`${
                openMenu ? "hidden" : "flex"
              } md:flex md:flex-wrap md:border-none p-4 md:rounded-none md:static md:flex-row md:translate-y-0 bg-[#12433d] border-4 rounded-2xl flex-col gap-4 -bottom-2 translate-y-[100%] absolute`}
            >
              <Link to="ve-chung-toi">
                <li className="whitespace-nowrap">Về chúng tôi</li>
              </Link>
              <Link to="san-pham-le">
                <li className="whitespace-nowrap">Sản phẩm lẻ</li>
              </Link>
              <Link to="combo-san-pham">
                <li className="whitespace-nowrap">Combo sức khỏe</li>
              </Link>
              <Link to="tinh-bmi">
                <li className="whitespace-nowrap">Tính BMI</li>
              </Link>
              <Link to="kien-thuc-dinh-duong">
                <li className="whitespace-nowrap">Tin tức</li>
              </Link>
              <Link to="ve-chung-toi">
                <li className="whitespace-nowrap">Liên hệ</li>
              </Link>
            </ul>
            <div className="flex gap-4 items-center">
              <Search />
              <Avatar />
              <Link to="cart">
                <ShoppingCart />
              </Link>
              <button
                className="md:hidden"
                onClick={() => setOpenMenu(!openMenu)}
              >
                {openMenu ? <Menu /> : <Close />}
              </button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;

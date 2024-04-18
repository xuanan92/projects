import { Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="h-auto bg-[#12433d]">
      <div className="flex gap-4 p-4 m-auto w-8/12 text-white">
        <div className="flex-grow">
          <h3 className="py-4 font-bold">VỀ SỮA HẠT</h3>
          <ul>
            <li>Hotline: 0877.277.200</li>
            <li>Email: elover@gmail.com</li>
            <li>Địa chỉ: S1 SkyOasis EcoPark, Van Giang, Hung Yen</li>
            <li>Thời gian làm việc: 07h30 - 20h00 các ngày trong tuần</li>
          </ul>
        </div>
        <div className="flex-grow">
          <h3 className="py-4 font-bold">HỖ TRỢ KHÁCH HÀNG</h3>
          <ul>
            <li>Chính sách đổi trả và hoàn tiền</li>
            <li>Chính sách vận chuyển</li>
            <li>Chính sách thanh toán</li>
            <li>Hướng dẫn mua hàng</li>
          </ul>
        </div>
        <div className="flex-grow">
          <h3 className="py-4 font-bold">HỢP TÁC</h3>
          <ul>
            <li>Nhận đặt làm quà biếu cho các Doanh nghiệp</li>
            <li>Nhận đặt hàng số lượgn lớn</li>
            <li>Liên tục tuyển nhà phân phối, đại lý</li>
            <li>
              <Facebook fontSize="large" />
              <Instagram fontSize="large" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

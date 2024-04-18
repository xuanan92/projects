const Cart = () => {
  // some: code cart feature for web
  // add item to cart, local web store item
  // database: product data structure, sale order data structure
  // xem cart
  // display content of chosen item in form - sale form
  // confirm check out payment
  // after checkout, switch to payment tab
  // confimr then will switch to hoan tat tab
  return (
    <div>
      <div className="p-8 m-auto w-6/12 text-center">
        <div className="flex gap-2 justify-center items-center p-4">
          <button className="text-gray-300 uppercase focus:text-black">
            <h3>Giỏ Hàng</h3>
          </button>
          <p>&gt;</p>
          <button className="text-gray-300 uppercase focus:text-black">
            <h3>Thanh Toán</h3>
          </button>
          <p>&gt;</p>
          <button className="text-gray-300 uppercase focus:text-black">
            <h3>Hoàn Tất</h3>
          </button>
        </div>
        <div className="py-8">
          <p>Chưa có sản phẩm nào trong giỏ hàng</p>
          <button className="py-2 px-4 m-4 text-center text-white uppercase bg-green-900 rounded-tl-lg rounded-br-lg">
            QUAY TRỞ LẠI CỬA HÀNG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;


const gioHang = [{ "maSP": 1, "tenSP": "VinSmart Live", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg", "soLuong": 1 }];

export const gioHangStore = (state = gioHang, action) => {
    // console.log(action);
    switch (action.type) {
        case "THEM_GIO_HANG": {
            //code xử lý thêm giỏ hàng
            let sanPhamClick = { ...action.sanPham, soLuong: 1 };
            let gioHangCapNhat = [...state];

            let spGioHang = gioHangCapNhat.find((sp) => {
                return sp.maSP === sanPhamClick.maSP;
            });
            if (spGioHang) {
                spGioHang.soLuong += 1;
            } else {
                gioHangCapNhat.push(sanPhamClick);
            }
            console.log(gioHangCapNhat);
            //imutable (tính bất biến của object và mảng)
            //gán theo kiểu object hoặc mảng là truyền theo tham chiếu
            // return [...gioHangCapNhat];
            return gioHangCapNhat;

        }
        case "XOA_SAN_PHAM":{
            // filter
            //Lây các sản phẩm có mã khác với sp cần xóa
            let gioHangCapNhat = [...state];
            const mangMoi = gioHangCapNhat.filter((sp) => {
                return sp.maSP !== action.idSP
            });

            return mangMoi;
        }
        default: return state;
    }
}
import React, { Component } from 'react';
import Cart from './Cart';
import ProductList from './ProductList';

class ExerciseCart extends Component {
    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        gioHang: []
    }

    //Hàm xử lý setState phải đặt chung component với khai báo state
    themGioHang = (spAdded) => {
        //setState
        //spead operater        
        //Thêm soLuong vào cho đối tương sp được click
        let spGioHang = {...spAdded,soLuong:1};
        // console.log(spGioHang);
        //Copy mảng giỏ hàng cũ vào mảng mới
        let gioHangCapNhat = [...this.state.gioHang];
        //Tìm sản phẩm được click có tồn tại trong mảng giỏ hàng chưa
        // find():gia trị của phần tử , findIndex(): trả về vị trí(index) của phần tử
        let spTK =  gioHangCapNhat.find((sp) => {
           return sp.maSP === spGioHang.maSP;
        });
        // console.log(spTK);
        if(spTK){
            // tìm thấy
            //Tăng số lượng lên 1 đơn vị
            spTK.soLuong +=1;
        }else{
            //chưa có trong giỏ hàng
            //thêm sp mới cho giỏ hàng
            gioHangCapNhat.push(spGioHang);
        }
        this.setState({
            gioHang:gioHangCapNhat
        })

    }
    
    xoaGioHang = (spDeleted) => {
        // console.log(spDeleted);        
        let {gioHang} =this.state;
        //Tìm vị trí của sản phẩm cần xóa trong mảng giỏ hàng
        let index = gioHang.findIndex((sp) => {
            return sp.maSP === spDeleted.maSP;
        });
        if(index !== -1 ){
            //tìm thấy
            //xóa sản phẩm khỏi giỏ hàng
            gioHang.splice(index,1);
        }
        this.setState({
            gioHang:gioHang
        })
    }  
    
    tangGiamSL = (maSPSL, soLuong) => {
        console.log(maSPSL);
        let {gioHang} = this.state;
        //Tìm sản phẩm cần đổi số lượng
        let spTK =  gioHang.find((sp) => {
            return maSPSL === sp.maSP;
         });
        if(spTK){
            //tìm thấy
            //Thay đổi số lượng        
            spTK.soLuong +=  soLuong
            if(spTK.soLuong < 1){
                alert("số lượng không hợp lệ");
                spTK.soLuong -=  soLuong
            }
        }
        this.setState({
            gioHang:gioHang
        })

    } 

    tongSL = ()=>{
        //reduce(): duyệt mảng, biểu thức tính toán, return kết quả của biểu thức tính toán
        let {gioHang} = this.state;
        let tongSL = gioHang.reduce((soLuong,sp,index) => {
            return soLuong += sp.soLuong;
        },0);
        return tongSL;
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-4">
                        <p>Giỏ hàng ({this.tongSL()})</p>
                    </div>
                </div>
                <ProductList mangSP={this.arrPhone} themGioHang={this.themGioHang}/>
                <Cart tangGiamSL={this.tangGiamSL} xoaGioHang={this.xoaGioHang}  gioHang={this.state.gioHang} />


            </div>
        );
    }
}

export default ExerciseCart;
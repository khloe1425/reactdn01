import React, { Component } from 'react'
//Thư viện kết nối với store
import {connect} from 'react-redux';

class GioHang extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((sp,index) => {
            return <tr key={index}>
            <td>{sp.maSP}</td>
            <td>{sp.tenSP}</td>
            <td style={{ width: "100px" }}>
                <img className="img-fluid" src={sp.hinhAnh} alt="" />
            </td>
            <td>
                <button className="btn btn-info" onClick={() => {               
                }} >+</button>
                <span>{sp.soLuong}</span>
                <button className="btn btn-info" onClick={() => {                   
                }}>-</button>
            </td>
            <td>
               {sp.giaBan.toLocaleString()}
            </td>
            <td>
                {/* Những giá trị có thể tính toán từ giá trị có sẵn thì không cần lưu trữ */}
                {(sp.soLuong*sp.giaBan).toLocaleString()}
            </td>
            <td>
                <button onClick={() => {   
                    // C1 
                    // const action = {
                    //     type:"XOA_SAN_PHAM",
                    //     idSP:sp.maSP
                    // }            
                    // this.props.dispatch(action);
                    // C2
                       this.props.xoaSP(sp.maSP)
                }} className="btn btn-danger">Xóa</button>
            </td>
        </tr>
        })
    }
    
    render() {
        console.log(this.props)
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã Sản Phẩm</th>
                                        <th scope="col">Tên Sản Phẩm</th>
                                        <th scope="col">Hình Ảnh</th>
                                        <th scope="col">Số Lượng</th>
                                        <th scope="col">Đơn Giá</th>
                                        <th scope="col">Thành Tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {this.renderGioHang()}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// C2
//hàm giúp đưa data lên store redux
const mapDispatchToProps = (dispatch)=>{
    return {
        xoaSP:(maSP) => {
            const action = {
                    type:"XOA_SAN_PHAM",
                    idSP:maSP
                }            
            dispatch(action);
        }
    }
}
//Hàm lấy giá trị state từ store redux
const mapStateToProps = (rootReducer) => {
    return {
        gioHang: rootReducer.gioHangStore
    }
}
//Khai báo kết nối từ GioHang đến Store redux
const ComponentGioHangRedux = connect(mapStateToProps,mapDispatchToProps)(GioHang);
export default ComponentGioHangRedux;

// //closure function
// function main(){
//     var myFunction = function(){
//         console.log("1234");
//     }
//     return myFunction;
// }

// main()()



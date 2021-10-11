import React, { Component } from 'react'

export default class Cart extends Component {

    renderGioHang = () => {
        let {gioHang,xoaGioHang,tangGiamSL} = this.props;
        return gioHang.map((phone, index) => {
            return <tr key={index}>
                <td>{phone.maSP}</td>
                <td>{phone.tenSP}</td>
                <td style={{ width: "100px" }}>
                    <img className="img-fluid" src={phone.hinhAnh} alt="" />
                </td>
                <td>
                    <button className="btn btn-info" onClick={() => {
                        tangGiamSL(phone.maSP,1)
                    }} >+</button>
                    <span>{phone.soLuong}</span>
                    <button className="btn btn-info" onClick={() => {
                        tangGiamSL(phone.maSP,-1)
                    }}>-</button>
                </td>
                <td>
                   {phone.giaBan.toLocaleString()}
                </td>
                <td>
                    {/* Những giá trị có thể tính toán từ giá trị có sẵn thì không cần lưu trữ */}
                    {(phone.soLuong*phone.giaBan).toLocaleString()}
                </td>
                <td>
                    <button onClick={() => {
                        xoaGioHang(phone);
                    }} className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        })
    }


    render() {
        console.log(this.props.gioHang)
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

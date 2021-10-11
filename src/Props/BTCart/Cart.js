import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
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
                                    <tr>
                                        <td>1</td>
                                        <td>VinSmart Live</td>
                                        <td style={{ width: "100px" }}>
                                            <img className="img-fluid" src="./img/vsphone.jpg" alt="" />
                                        </td>
                                        <td>
                                            <button className="btn btn-info">+</button>
                                            <span>1</span>
                                            <button className="btn btn-info">-</button>
                                        </td>
                                        <td>
                                            5700000
                                        </td>
                                        <td>
                                            5700000
                                        </td>
                                    </tr>
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

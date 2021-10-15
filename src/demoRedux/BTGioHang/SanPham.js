import React, { Component } from 'react'

//Kết nối với store redux
import {connect} from 'react-redux';

class SanPham extends Component {
    render() {
        console.log(this.props);
        let {sp} = this.props;
        return (
            <div className="col-4">
                <div className="card">
                    <img src={sp.hinhAnh} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{sp.tenSP}</h5>
                        <p className="card-text">{sp.giaBan.toLocaleString()}</p>
                        <button onClick={() => {
                            const action ={
                                type:"THEM_GIO_HANG",
                                sanPham:sp
                            }
                            this.props.dispatch(action);
                        }} className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" >Thêm Giỏ Hàng</button>
                    </div>
                </div>

            </div>
        )
    }
}


export default connect()(SanPham)
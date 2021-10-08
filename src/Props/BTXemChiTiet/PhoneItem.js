import React, { Component } from 'react'

export default class PhoneItem extends Component {
    render() {
        let {sp,xemChiTiet} = this.props
        return (
            <div className="card">
                <img src={sp.hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sp.tenSP}</h5>
                    <p className="card-text">{sp.giaBan}</p>
                    <a className="btn btn-primary" onClick={() => {
                        // this.xemChiTiet(sp);
                        xemChiTiet(sp);
                        
                    }}>Xem Chi Tiết</a>
                </div>
            </div>
        )
    }
}

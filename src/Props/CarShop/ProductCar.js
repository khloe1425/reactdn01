import React, { Component } from 'react'

export default class ProductCar extends Component {
    render() {
        let {sp,xem} = this.props;
        return (
            <div className="card">
                <img src={sp.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sp.name}</h5>
                    <p className="card-text">{sp.price}</p>
                    <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                    onClick={() => {
                        xem(sp)
                    }} >Xem Chi Tiết</a>
                </div>
            </div>
        )
    }
}

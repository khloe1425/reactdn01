import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        // console.log(this.props.nameCar);
        // let {nameCar,price} = this.props;
        let {product} = this.props;
        
        return (
            <div className="card">
                <img src="./img/CarBasic/products/black-car.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    {/* <h5 className="card-title">{nameCar}</h5>
                    <p className="card-text">{price}$</p> */}
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}$</p>
                </div>
            </div>

        )
    }
}

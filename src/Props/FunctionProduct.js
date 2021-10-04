import React from 'react'

export default function FunctionProduct(props) {
    let {product} = props;
    return (
        <div className="card">
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
                {/* <h5 className="card-title">{nameCar}</h5>
            <p className="card-text">{price}$</p> */}
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}$</p>
            </div>
        </div>
    )
}

import React, { Component } from 'react'
import ProductCar from './ProductCar'

export default class ProductList extends Component {
    renderCarList = ()=>{
        let {arrCar,xemChiTiet} = this.props;
        return arrCar.map((car,index) => {
            return <div className="col-3" key={index}>
            <ProductCar sp={car} xem={xemChiTiet}/>
         </div>
        })
    }
    render() {
        // let {arrCar} = this.props;
        // console.log(arrCar);
        return (
            <div className="row">
                 {this.renderCarList()}
            </div>
        )
    }
}

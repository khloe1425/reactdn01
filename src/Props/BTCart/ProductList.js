import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProductItem = () => {
        let {mangSP,themGioHang} = this.props;
        return mangSP.map((phone,index) => {
            return <ProductItem themGioHang={themGioHang} sp={phone} key={index}/>;
        })
    }

    render() {
        // console.log(this.props.mangSP);
        return (
            <div className="row">
                {this.renderProductItem()}
            </div>
        )
    }
}

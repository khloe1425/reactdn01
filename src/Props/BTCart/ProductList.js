import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProductItem = () => {
        return this.props.mangSP.map((phone,index) => {
            return <ProductItem sp={phone} key={index}/>;
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

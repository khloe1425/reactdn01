import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DSSanPham extends Component {
    renderSP = () => {
        let {mangSP} = this.props;
        return mangSP.map((sp,index) => {
            return <SanPham sp={sp} key={index}/>
        })
    }
    
    render() {
        return (
            <div className="row">
                {this.renderSP()}
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state ={
        imgCar:"./img/CarBasic/products/black-car.jpg"
    }
    renderImage = (color) => {
        //gán giá trị mới cho state, render lại UI        
        this.setState({
            imgCar: `./img/CarBasic/products/${color}-car.jpg`
        });
    }    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <img className="img-fluid" src={this.state.imgCar} alt="" />
                    </div>
                    <div className="col-4">
                        <div className="row mb-3">
                            <div className="col-4">
                                <button className="btn bg-dark text-white" onClick={() => {
                                  this.renderImage("black");  
                                }}>Black</button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <button className="btn bg-secondary" onClick={() => {
                                  this.renderImage("steel");  
                                }}>Steel</button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <button className="btn btn-light" onClick={() => {
                                  this.renderImage("silver");  
                                }}>Silver</button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <button className="btn btn-danger" onClick={() => {
                                  this.renderImage("red");  
                                }} >Red</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

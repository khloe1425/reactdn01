import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    render() {
        return (
            <div className="container">
               <div className="row">
                   <div className="col-8">
                       <img src="" alt="" />
                   </div>
                   <div className="col-4">
                       <div className="row mb-3">
                           <div className="col-4">
                               <button className="btn bg-dark text-white">Black</button>
                           </div>                           
                       </div>
                       <div className="row mb-3">
                           <div className="col-4">
                               <button className="btn bg-secondary">Steel</button>
                           </div>                           
                       </div>
                       <div className="row mb-3">
                           <div className="col-4">
                               <button className="btn btn-light">Silver</button>
                           </div>                           
                       </div>
                       <div className="row mb-3">
                           <div className="col-4">
                               <button className="btn btn-danger">Red</button>
                           </div>                           
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class ChangeFontSize extends Component {
    // constructor(){
    //     super()
    //     this.state = new;
    // }
    /**
     * + Xây dựng UI (Tạo component, html(JSX), css)
     * + Xác định dữ liệu cần thay đổi thì đưa vào state và kiểu dữ liệu của nó
     * + Xây dựng phương thức (xác đinh phương thức sẽ chứa setState)
     */
    state = {
        fs: 16
    }
    render() {
        return (
            <div className="container py-5">
                <p style={{ fontSize: `${this.state.fs}px` }} className="bg-dark text-white" >Lorem ipsum dolor sit amet.</p>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success" onClick={() => {
                        // anfn
                        //  let newState ={
                        //  }
                        this.setState({
                            fs:this.state.fs + 2
                        })
                    }}>+</button>
                    <button type="button" className="btn btn-danger" onClick={() => {
                        this.setState({
                            fs:this.state.fs - 2
                        })
                    }} >-</button>
                </div>

            </div>
        )
    }
}

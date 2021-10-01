import React, { Component } from 'react';

class HandleEvent extends Component {

    //Thuộc tính

    // Phương thức (met)
    testHandleEvent = () => {
        alert("Click rồi nè!");
    }
    showInfo = (name) => {
        alert(`Hello ${name}`);
    }
    render() {
        let fullName = "Nguyễn Thị Học Viên";
        return (
            <div className="container py-5">
                <button className="btn btn-warning mr-3" onClick={this.testHandleEvent} >Click Me</button>
                <button className="btn btn-warning" onClick={()=>{
                    this.showInfo(fullName);
                }} >Show Info</button>
            </div>
        );
    }
}

export default HandleEvent;
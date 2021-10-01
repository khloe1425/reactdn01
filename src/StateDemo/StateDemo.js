import React, { Component } from 'react'

export default class StateDemo extends Component {

    //Thuộc tính
    // isLogin = false;
    username = "HV001";
    /**
     * State:
     * _ thuộc tính có sẵn của react class component
     * _Công dụng: setState
     *  + gán lại giá trị cho thuộc tính
     *  + chạy lại phương thức render
     */
    //Đối tượng ban đầu
    state = {
        isLogin:false
    }
    //Phương thức
    renderLogin = () => {
        if(this.state.isLogin){
            //có thể viết dòng code
            return <span className="text-white">{this.username}</span>;
        }
        return <button className="btn btn-success" onClick={this.handleLogin}>Login</button>;
    }   
    handleLogin = async () => {
        // this.isLogin = true;
        // console.log(this.isLogin);   
        let newState = {
            isLogin:true
        }
        //setState hàm bất đồng bộ 
        //anfn            
        // this.setState(newState,() => {
        //     console.log(this.state.isLogin);
        // });
        // console.log(this.state.isLogin);//false
        await this.setState(newState);
        console.log(this.state.isLogin);
    }    
    //Phương thức render chỉ chạy một lần và không chạy lại
    render() {
        return (
            <div className="container">
                {/* <h1>State Demo</h1> */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        {this.renderLogin()}


                        {/* Nội dung Login */}
                        {/* Nếu isLogin === true hiện Username , ngược lại hiện button Login ?:*/}
                        {/* {this.isLogin === true ? <span className="text-white">{this.username}</span> : <button className="btn btn-success">Login</button>} */}
                        {/* {this.isLogin ? <span className="text-white">{this.username}</span> : <button className="btn btn-success">Login</button>} */}

                    </div>
                </nav>

            </div>
        )
    }
}

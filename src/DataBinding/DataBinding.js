import React, { Component } from 'react'

export default class DataBinding extends Component {
    //Thuộc tính
    age = 20;
    img = "https://i.imgur.com/e5Zxf5M.jpg";

    renderProduct = () => {
        let product = {
            name: "Product 001",
            moTa: "sản phẩm ...",
            price: 100,
            imgProduct: "https://i.imgur.com/e5Zxf5M.jpg"
        }

        return <div className="card" style={{ width: '18rem' }}>
            <img src={product.imgProduct} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    {product.moTa}
                    <br/>
                    {product.price}
                </p>                
            </div>
        </div>
        

    }

    //Phương thức chính
    render() {
        //Biến thông thường
        let name = "Nguyễn Thị Học Viên";

        return (
            <div className="container">
                <p>Tên học viên: {name}</p>
                <p>Tuổi học viên: {this.age}</p>
                <img className="w-25" src={this.img} alt="..." />

                {/* gọi phương thức */}
                {this.renderProduct()}

            </div>

        )
    }
}

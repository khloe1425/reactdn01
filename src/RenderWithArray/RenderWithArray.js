import React, { Component } from 'react'

export default class RenderWithArray extends Component {
    //thuộc tính
    productList = [
        { id: 1, name: "black car", price: 1000, img: "./img/CarBasic/products/black-car.jpg" },
        { id: 2, name: "steel car", price: 2000, img: "./img/CarBasic/products/steel-car.jpg" },
        { id: 3, name: "silver car", price: 2000, img: "./img/CarBasic/products/silver-car.jpg" },
        { id: 4, name: "red car", price: 1000, img: "./img/CarBasic/products/red-car.jpg" }
    ];

    // phương thức
    renderTable = () => {
        // //content (chứa các đối tượng tr ) 
        // let content = [];
        // //Duyệt mảng (productList)
        // for (let i = 0; i < this.productList.length; i++) {
        //     let product = this.productList[i];
        //      //Lúc duyệt mảng sẽ tạo từng đối tượng tr
        //     let objTR = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img className="w-25" src={product.img} alt="" /></td>
        //     </tr>

        //    content.push(objTR);
        // }
        // //return content vào tbody
        // return content;//[<tr>..</tr>,<tr>...</tr>]

        let content = this.productList.map((product, index) => {            
            //return trong map, sẽ không dừng vòng , chỉ dừng khi duyệt mảng
            //trả về 1 mảng mới
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="w-50"><img className="w-50" src={product.img} alt="" /></td>
            </tr>
        });
         //return content vào tbody
         //JSX 
        return content;//[{<tr>..</tr>},{<tr>...</tr>}]

    }

    render() {
        // console.log(<div>abc</div>);
        // let name ="abc"; //biến thông thường
        //biến thông thường
        // function myFunc(){ }
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Tạo UI bằng code js */}
                        {//viết code js
                        //chỉ dùng khi code ngắn (2-3 dòng) và không cần tái sử dụng
                        }
                        {this.renderTable()}
                    </tbody>
                </table>

            </div>
        )
    }
}

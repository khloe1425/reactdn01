import React, { Component } from 'react'
// css StyleSheet
import './style.css';
import  styleModule from "./StyleComponent.module.css";

export default class StyleComponent extends Component {
    render() {
        let styleInline ={
            backgroundColor:"pink",
            color:"white"
        }
        return (
            <div className="container">
                {/* style react là đối tượng */}
                <p style={{
                    backgroundColor:"green",
                    color:"yellow"
                }} className="text">StyleComponent</p>

                  <p style={styleInline} className="text fontText">StyleInline</p>
                  <p className={styleModule.fontText}>Style Module</p>
                  <p className={`${styleModule["bg-color"]} ${styleModule["container__p"]}`}>Style Module</p>
            </div>
        )
    }
}

// document.getElementById("id").style.backgroundColor

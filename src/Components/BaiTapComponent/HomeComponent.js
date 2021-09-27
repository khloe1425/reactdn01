import React, { Component } from 'react'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import NavigationComponent from './NavigationComponent'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* header component */}
                        <HeaderComponent/>
                    </div>
                    <div className="col-4">
                        {/* nav component */}
                        <NavigationComponent/>
                    </div>
                    <div className="col-8">
                        {/* content component */}
                        <ContentComponent/>
                    </div>
                    <div className="col-12">
                        {/* footer component */}
                        <FooterComponent/>
                    </div>
                </div>
            </div>
        )
    }
}

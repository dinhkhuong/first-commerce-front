import React, { Component } from 'react'
import FooterComponent from '../header_footer/FooterComponent'
import HeaderComponent from '../header_footer/HeaderComponent'

import ProductRegistryComponent from '../product/ProductRegistryComponent'

import MyCartComponent from '../product/MyCartComponent'
import AllProductComponent from '../product/AllProductComponent'
import LoginComponent from '../security/LoginComponent'
import LogoutComponent from '../security/LogoutComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class RouterComponent extends Component {
    render() {

        
        return(
            <div>
                <Router>
                    <HeaderComponent />
                        <Switch>
                            <Route path="/home" exact component={AllProductComponent} />
                            <Route path="/" exact component={AllProductComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            {/* <AuthenticatedRoute path="/logout" exact component={LogoutComponent}/> */}
                            <Route path="/logout" exact component={LogoutComponent}/>
                            <AuthenticatedRoute path="/MyCart" exact component={MyCartComponent} />
                            <AuthenticatedRoute path="/ProductRegistry" exact component={ProductRegistryComponent} />
                        </Switch>
                    <FooterComponent /> 
                </ Router>
            </div>
       )
   } 
}

export default RouterComponent; 
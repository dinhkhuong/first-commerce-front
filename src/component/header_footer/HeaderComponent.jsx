import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../../service/AuthenticationService';
class HeaderComponent extends Component {

    
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
                    <ul className=" navbar-nav "> 
                        <h3><Link className="nav-link" to="/Home">Home</Link></h3>                                       
                        <h3><Link className="nav-link" to="/ProductRegistry">Product Registry</Link></h3>
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {/* <h4><Link className="nav-link" to="/MyCart">&#xf218</Link></h4> */}
                        <h2>
                            <Link className="nav-link" to="/MyCart">
                                {/* ##Cart icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart col-lg-16 " viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 
                                s4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>

                            </Link>
                        </h2>

                        {!isUserLoggedIn && <h4><Link className="nav-link" to="/login">Login</Link></h4>}
                        {isUserLoggedIn && <h4><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></h4>}
                        
                    </ul>
                </nav>                 
            </header>
        )
    }
}
export default withRouter(HeaderComponent); 
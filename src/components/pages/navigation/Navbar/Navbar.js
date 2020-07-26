import React from 'react';
import './style.css';
import '../../../assets/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';
import logo from "../../../assets/images/logo.svg";
import placehoder from "./image/placeholder.svg"
import pageurl from '../../../router/url/pageurl'


const Navbar = (props) => {
  return (
    <> 
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
            <Link className="navbar-brand" to={pageurl.FAQ_PAGE_URL}>
               <img src={logo} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar" aria-controls="exCollapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
                
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        
            <div className="collapse navbar-collapse text-center" id="exCollapsingNavbar">
            <ul className="navbar-nav ml-auto">
                
              
                <li className="nav-item ">
                    <Link className="nav-link" 
                        to="#"
                        >FUND <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item ">
                    <Link className="nav-link" 
                        to="#"
                        >REQUEST <span className="sr-only">(current)</span></Link>
                </li>


                <li className="nav-item ">
                    <Link className="nav-link" to={pageurl.FAQ_PAGE_URL}>ABOUT <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item ">
                    <Link className="nav-link" to="#">DASHBOARD <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item ">
                    <Link className="btn btn-fml-secondary" to={pageurl.FAQ_PAGE_URL}>LOGIN <span className="sr-only">(current)</span></Link>
                </li>

                {/* THe person working on Login component should set this on isLoggedIn */}
                <div className="dropdown d-none">
                    <img src={placehoder} alt="placeholder" />
                    <Link  className=" dropdown-toggle text-fml-primary" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Oluwakemi Adeleke
                    </Link > 

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link  className="dropdown-item text-fml-primary" to="#">Action</Link > 
                        <Link  className="dropdown-item text-fml-primary" to="#">Another action</Link > 
                        <Link  className="dropdown-item text-fml-primary" to="#">Something else here</Link > 
                    </div>
                </div>

                {/* <li className="nav-item ">
                    <button className="btn btn-fml-secondary" to="#">Start a campaign <span className="sr-only">(current)</span></button>
                </li> */}
             
            </ul>
         
            </div>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Navbar);
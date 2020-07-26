import React, { Component } from "react";
import "./adminDashboard.css";
import {Link} from 'react-router-dom';
import alerm from "./img/alerm.png";
import avatar from "./img/avatar.png";
import down from "./img/down.png";
import fundee from "./img/fundee.png";
import funder from "./img/funder.png";
import left from "./img/left-logo.png";
import profit from "./img/profit.png";
import up from "./img/up.png";
import user1 from "./img/user1.png";
import user2 from "./img/user2.png";
import user3 from "./img/user3.png";
import Ham1 from "./img/Ham-1.png";
import Ham2 from "./img/Ham-2.png";
import { Navbar, Footer } from "../../navigation";

class AdminDashboard extends Component {
  componentDidMount() {
    var circle = document.querySelector('circle');
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }
    const progress_value = document.querySelector('#displayed_value').innerHTML;
    setProgress(progress_value);

    let sidebar_opener = document.querySelector('#sidebar-opener')
    let sidebar_closer = document.querySelector('#sidebar-closer')
    let sidebar = document.querySelector('#sidebar')

  sidebar_opener.addEventListener('click', function(){
    sidebar.style.display = 'block';
    sidebar.classList.remove("sidebar_close");
    sidebar.classList.add("sidebar_open");
})

  sidebar_closer.addEventListener("click", function () {
    sidebar.classList.remove("sidebar_open");
    sidebar.classList.add("sidebar_close");
});
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="adminDashboard">
          <div className="container-fluid">
            <div className="row">
              {/* Sidebar Section */}
              <aside
                className="col-7 col-md-3 col-lg-2 custom__bg-dark vh-100 sidebar"
                id="sidebar"
              >
                <img src={Ham2} alt="Ham2" className="text-white d-md-none xander" id="sidebar-closer" />
                <img src={left} alt="left" className="ml-2"/> 
                <ul className="navbar-nav  mt-2 mt-lg-0 anchor">
                    <li className="nav-item ">
                      <Link className="nav-link " to="">Campaign</Link>
                    </li> &nbsp;
                    <li className="nav-item">
                      <Link className="nav-link" to="">Fundings</Link>
                    </li> &nbsp;
                    <li className="nav-item">
                      <Link className="nav-link" to="">Payments</Link>
                    </li> &nbsp;
                    <li className="nav-item">
                      <Link className="nav-link" to="">Settings</Link>
                    </li> &nbsp;
             </ul>
              </aside>
              {/* Main Section  */}
              <main className="col-12 col-md-9 col-lg-10 bg-light px-0 vh-100 overflow">
                {/* TopNav Section */}
                <nav className="bg-white d-flex sticky-top justify-content-en align-items-center py-2 py-md-3 px-2 px-md-5">
                {/* eslint-disable-next-line */}
                <img src={Ham1} className="d-md-none" id="sidebar-opener" />
                  <h5 className="font-weight-bold d-md-none ml-3 mb-0">
                    Dashboard
                  </h5>
                  <img
                     src={alerm}
                    className="img-fluid mr-3 mr-lg-5 ml-auto"
                    alt=""
                  />
                  <img
                    src={avatar}
                    className="img-fluid avatar"
                    alt=""
                  />
                  <div className="ml-2">
                    <p className="font-weight-bold my-0 d-none d-md-block">
                      Oluwakemi Adeleke
                    </p>
                    <p className="my-0 d-none d-md-block">Administrator</p>
                  </div>
                  <div className="btn-group">
                    <div className="btn-group ml-0 mx-lg-3">
                      <button
                        type="button"
                        className="btn dropdown-toggle no-border"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                      <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item" type="button">
                          Action
                        </button>
                        <button className="dropdown-item" type="button">
                          Another action
                        </button>
                        <button className="dropdown-item" type="button">
                          Something else here
                        </button>
                      </div>
                    </div>
                  </div>
                </nav>
                <div className="container-fluid px-3 px-md-3 px-lg-4 px-xl-5 py-4">
                  <h5 className="font-weight-bold d-none d-md-block">
                    Dashboard
                  </h5>
                  {/* Dashboard card  */}
                  <div className="row mt-md-3">
                    <div className="col-12 col-md-6 col-lg-4 px-3 px-md-2 px-lg-2 px-xl-3 my-2 my-lg-0">
                      <div className="bg-white px-4 pt-4 pb-3 d-flex align-items-center justify-content-between status__card">
                        <div>
                          <p className="small">TOTAL PROFIT</p>
                          <h5>N25,000,000</h5>
                          <p>
                            <img src={down} alt="" />{" "}
                            <span className="text-danger">5%</span> Less profit
                          </p>
                        </div>
                        <div className="bg-blue50 p-4 rounded-circle">
                          <img
                            src={profit}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 px-3 px-md-2 px-lg-2 px-xl-3 my-2 my-lg-0">
                      <div className="bg-white px-4 pt-4 pb-3 d-flex align-items-center justify-content-between status__card status__card--blue">
                        <div>
                          <p className="small">TOTAL FUNDEES</p>
                          <h5>12,080</h5>
                          <p>
                            <img src={up} alt="" />{" "}
                            <span className="text-success">21%</span> Increase
                            this month
                          </p>
                        </div>
                        <div className="bg-blue py-4 px-3 rounded-circle">
                          <img
                            src={fundee}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 px-3 px-md-2 px-lg-2 px-xl-3 my-2 my-lg-0">
                      <div className="bg-white px-4 pt-4 pb-3 d-flex align-items-center justify-content-between status__card status__card--red">
                        <div>
                          <p className="small">TOTAL FUNDERS</p>
                          <h5>5,060</h5>
                          <p>
                            <img src={up} alt="" />{" "}
                            <span className="text-success">21%</span> Increase
                            this month
                          </p>
                        </div>
                        <div className="bg-red p-4 rounded-circle">
                          <img
                            src={funder}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Fund Requests */}
                  <div className="row mt-4 mt-lg-5">
                    <div className="col-lg-9">
                      <div className="d-flex justify-content-between align-items-center mb-4 mb-md-0">
                        <h5 className="font-weight-bold">Fund Requests</h5>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-transparent custom__outline dropdown-toggle py-2 px-4"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <small className="text-dark50">Most Recent</small>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">
                              Action
                            </button>
                            <button className="dropdown-item" type="button">
                              Another action
                            </button>
                            <button className="dropdown-item" type="button">
                              Something else here
                            </button>
                          </div>
                        </div>
                      </div>
                      <table className="table table-ligh bg-white mt-3 shadow-sm">
                        <thead className="thead-blue text-white">
                          <tr>
                            <td className="py-3 d-none d-md-block">
                              ID
                            </td>
                            <td className="py-3">
                              Name
                            </td>
                            <td className="py-3 d-none d-md-block">
                              Amount
                            </td>
                            <td className="py-3">
                              Status
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-4 d-none d-md-block">10356</td>
                            <td className="py-4 py-md-2">
                              <img
                                src={user1}
                                className="img-fluid d-none d-md-inline mr-3"
                                alt=""
                              />{" "}
                              Adenike Ogunmola
                            </td>
                            <td className="py-4 d-none d-md-block">N60,000</td>
                            <td className="py-4">
                              <span className="status-success pl-4 py-2">
                                Approved
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-4 d-none d-md-block">10359</td>
                            <td className="py-4 py-md-2">
                              <img
                                src={user2}
                                className="img-fluid d-none d-md-inline mr-3"
                                alt=""
                              />{" "}
                              Adenike Ogunmola
                            </td>
                            <td className="py-4 d-none d-md-block">N60,000</td>
                            <td className="py-4">
                              <span className="status-warning pl-4 py-2">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-4 d-none d-md-block">10242</td>
                            <td className="py-4 py-md-2">
                              <img
                                src={user3}
                                className="img-fluid d-none d-md-inline mr-3"
                                alt=""
                              />
                              Uduak Gabriel
                            </td>
                            <td className="py-4 d-none d-md-block">N60,000</td>
                            <td className="py-4">
                              <span className="status-success pl-4 py-2">
                                Approved
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-4 d-none d-md-block">10359</td>
                            <td className="py-4 py-md-2">
                              <img
                                src={user2}
                                className="img-fluid d-none d-md-inline mr-3"
                                alt=""
                              />{" "}
                              Adenike Ogunmola
                            </td>
                            <td className="py-4 d-none d-md-block">N60,000</td>
                            <td className="py-4">
                              <span className="status-warning pl-4 py-2">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-4 d-none d-md-block">10242</td>
                            <td className="py-4 py-md-2">
                              <img
                                src={user3}
                                className="img-fluid d-none d-md-inline mr-3"
                                alt=""
                              />{" "}
                              Uduak Gabriel
                            </td>
                            <td className="py-4 d-none d-md-block">N60,000</td>
                            <td className="py-4">
                              <span className="status-success pl-4 py-2">
                                Approved
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Audits  */}
                    <div className="col-lg-3 pl-lg-0 pl-xl-2 mt-4 mt-lg-0">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="font-weight-bold">Audit</h5>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-transparent custom__outline py-2 px-4 px-lg-1 px-xl-4"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <small className="text-dark50">
                              Feb 3rd - Mar 30th
                            </small>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">
                              Action
                            </button>
                            <button className="dropdown-item" type="button">
                              Another action
                            </button>
                            <button className="dropdown-item" type="button">
                              Something else here
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white shadow-sm rounded mt-3 px-4 px-lg-3 px-xl-4 pb-4">
                        {/* Audit Progress */}
                        <div className="account__progress">
                          <svg
                            className="progress-ring"
                            width="100%"
                            height={240}
                          >
                            <circle
                              className="progress-ring__circle"
                              stroke="#FA7E5C"
                              strokeWidth={20}
                              fill="transparent"
                              r={60}
                              cx="50%"
                              cy="50%"
                            />
                          </svg>
                          <div className="progress__value">
                            <h1>
                              <span id="displayed_value">85</span>%
                            </h1>
                            <h6>PROFIT</h6>
                          </div>
                        </div>
                        <h1 id="displayed_value">75%</h1>
                        <p className="text-dark50">Loan Granted</p>
                        <div
                          className="progress my-4"
                          style={{ height: "10px" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <button className="btn btn-block bg-red py-3">
                          Export Data
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AdminDashboard;

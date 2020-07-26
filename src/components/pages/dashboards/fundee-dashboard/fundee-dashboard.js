import React, {useEffect } from 'react';

import "./fundee-dashboard.css";
import paymentIcon from "../../../assets/images/paid-progress.svg"
import twitterIcon from "../../../assets/images/bx_bxl-twitter.svg"
import facebookIcon from "../../../assets/images/bx_bxl-facebook.svg"
import whatsappIcon from "../../../assets/images/ri_whatsapp-fill.svg"
import copyIcon from "../../../assets/images/bx_bxs-copy.svg"
import leftArrow from "../../../assets/images/arrow-left.svg"
import rightArrow from "../../../assets/images/arrow-right.svg"
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'

// import seach from './search.svg'
import { Navbar, Footer } from '../../navigation/navigation';

const FundeeDashboard = () => {
  useEffect(() => {
        //slider scroll feature
        const slideArea = document.querySelector(".help-card-contain");
        const slide = document.querySelector(".help-card");
        const controls = document.querySelectorAll(".slide-control");
    
        function handleScroll(e) {
          const slideItemWidth = slide.getBoundingClientRect().width;
          if (e.target.classList.contains("arrow-left")) {
            console.log(-slideItemWidth);
            slideArea.scroll({
              left: -slideItemWidth + slideArea.scrollLeft,
              behavior: "smooth"
            });
          } else {
            slideArea.scroll({
              left: slideItemWidth + slideArea.scrollLeft,
              behavior: "smooth"
            });
            console.log(slideItemWidth);
          }
        }
    
        controls.forEach(control => {
          control.addEventListener("click", handleScroll);
        });
     
  });
  let url = "";
  return (
    <ScrollIntoView>
      <Navbar />
      <div>
        <section className="investee-dashboard-info container-md px-md-0 mt-2 mt-md-5">
          <div className="col-md-6 px-0">
            <h1 className=" mb-4 ">
              Welcome back, <span className="text-fml-secondary">Chandan</span>
            </h1>
          </div>
          <div className="d-block w-100" />
          <div className="row px-0 mx-0">
            <div className="credit-score col-md-2 rounded position-relative text-md-center text-left text-light bg-fml-secondary px-3 px-md-2 py-3 align-self-start">
              <p className="mb-md-0">CREDIT SCORE</p>
              <span className="display-4 credit-score-value d-block py-md-4 font-weight-medium mb-md-4">
                1573
              </span>
              <span className="position-absolute refresh-icon p-2">
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12.5" cy="12.5" r="12.5" fill="white" />
                  <path
                    d="M17.6019 14.1859C17.3798 15.3953 16.7588 16.4954 15.8381 17.3105C14.9175 18.1255 13.7502 18.6086 12.5228 18.6825C11.2955 18.7563 10.0787 18.4168 9.06691 17.718C8.05513 17.0193 7.30668 16.0016 6.9411 14.8276C6.57551 13.6536 6.61388 12.391 7.05008 11.2413C7.48628 10.0917 8.29514 9.12134 9.34749 8.48531C10.3998 7.84929 11.635 7.58425 12.8556 7.73252C14.0762 7.8808 15.212 8.43383 16.0815 9.3033"
                    stroke="#FB3F5C"
                    strokeWidth={2}
                  />
                  <path
                    d="M12.3145 10.8584L17.3611 9.86042L15.7021 4.99091"
                    stroke="#FB3F5C"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            {/* Total loan balance */}
            <div className="d-md-none w-100" />
            <div className="loan-balance offset-md-1 col-7 col-md-3 align-self-center mt-3 mt-md-0">
              <span className="loan-text d-block mb-md-2">
                TOTAL LOAN BALANCE
              </span>
              <p>
                INR
                <span className="h1 loan-value font-weight-medium">
                  30,000
                </span>
              </p>
            </div>
            {/*Progress bar */}
            <div className="loan-progress ml-auto col-5 col-md-3 my-4 my-md-0 d-flex justify-content-end align-items-center px-0">
              <img src={paymentIcon} alt="progress" className="d-block" />
            </div>
          </div>
        </section>
        <section className="investee-dashboard-tips container-md px-md-0 mt-0 mt-md-5">
          <div className="dashboard-tips-container mx-0 px-0">
            <div className="dashboard-tips-card py-4 px-4 text-fml-primary rounded">
              <h3 className="mb-3">Promote your campaign to reach a wider audience</h3>
              <p>
                Promoting your campaign gives your it more visibility and
                enables you to be more acessible to potential investors or
                funders from other mediums.
              </p>
              <div className="promote-social row mx-0 px-0">
                <p className="col-xl px-0 mb-3 mb-xl-0">
                  Promote your campain through:
                </p>
                <div className="promote-social-links px-0 col-xl d-flex">
                  <a href={url}>
                    <img src={twitterIcon} alt= "twitter" />
                  </a>
                  <a href={url}>
                    <img src={whatsappIcon} alt= "whatsapp"/>
                  </a>
                  <a href={url}>
                    <img src={facebookIcon} alt = "facebook" />
                  </a>
                  <a href={url}>
                    <img src={copyIcon} alt = "copylink" />
                    <span className="text-fml-secondary pl-2">Copy Link</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="dashboard-tips-card py-4 px-4 text-fml-primary rounded">
              <h3 className="mb-3">Add materials to improve your legitimacy</h3>
              <p>
                Cosider including documents or materials that can reassure
                potential funders that you’re capable of repaying the loan.
                These could be pictures or text documents.
              </p>
              <p>You’ve added 2 files. Click the bars to view files.</p>
              <div className="files-bars w-100">
                <span className="file-bar" />
                <span className="file-bar" />
                <span className="file-bar undone" />
              </div>
              <button className="btn btn-fml-secondary float-right px-4 mt-3">
                Add file
              </button>
            </div>
          </div>
        </section>
        <section className="investee-account-overview container-md px-md-0 mt-5 pt-2">
          <h4 className="account-overview-intro font-weight-normal">
            Here's your account overview
          </h4>
          <div className="account-overview-grid mt-3">
            <div className="account-detail">
              <small>Pending Amount</small>
              <br />
              <h2>
                <span className="right">INR </span>30,000
              </h2>
            </div>
            <div className="account-detail">
              <small>Loaned amount</small>
              <br />
              <h2>
                <span className="right">INR </span>50,000
              </h2>
            </div>
            <div className="account-detail">
              <small>Paid amount</small>
              <br />
              <h2>
                <span className="right">INR </span>20,000
              </h2>
            </div>
            <div className="account-detail">
              <small>Interest rate</small>
              <br />
              <h2>
                2.5<span className="left"> %</span>
              </h2>
            </div>
            <div className="account-detail">
              <small>Amount per month</small>
              <br />
              <h2>
                <span className="right">INR </span>5,125
              </h2>
            </div>
            <div className="account-detail">
              <small>Interest per month</small>
              <br />
              <h2>
                <span className="right">INR </span>125
              </h2>
            </div>
            <div className="account-detail">
              <small>Total Term</small>
              <br />
              <h2>
                10<span className="left"> months</span>
              </h2>
            </div>
            <div className="account-detail">
              <small>Remaining Term</small>
              <br />
              <h2>
                6<span className="left"> months</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="investee-payment-history container-md px-md-0 mt-5 pt-2">
          <h4 className="payment-history-intro font-weight-normal">
            Repayment History
          </h4>
          <div className="table-container mt-3 overflow-auto">
            <table className="table border-bottom">
              <thead className="bg-fml-secondary text-light font-weight-bold">
                <tr>
                  <td>DATE</td>
                  <td>AMOUNT PAID</td>
                  <td>AMOUNT REMAINING</td>
                  <td>PAYMENT METHOD</td>
                  <td>REFERENCE ID</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="date">
                    <span className="day">25</span>
                    <br />
                    <span className="month">JULY</span>
                  </td>
                  <td>INR 5,000</td>
                  <td>INR 30,000</td>
                  <td>Bank Transfer</td>
                  <td>646872757669746861</td>
                </tr>
                <tr>
                  <td className="date">
                    <span className="day">27</span>
                    <br />
                    <span className="month">JUNE</span>
                  </td>
                  <td>INR 5,000</td>
                  <td>INR 35,000</td>
                  <td>Bank Transfer</td>
                  <td>646872757669746861</td>
                </tr>
                <tr>
                  <td className="date">
                    <span className="day">20</span>
                    <br />
                    <span className="month">MAY</span>
                  </td>
                  <td>INR 5,000</td>
                  <td>INR 4O,000</td>
                  <td>Bank Transfer</td>
                  <td>646872757669746861</td>
                </tr>
                <tr>
                  <td className="date">
                    <span className="day">25</span>
                    <br />
                    <span className="month">APRIL</span>
                  </td>
                  <td>INR 5,000</td>
                  <td>INR 45,000</td>
                  <td>Bank Transfer</td>
                  <td>646872757669746861</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="investee-help-others container-md px-md-0 mt-5 pt-2">
          <div className="row mx-0 px-0 justify-content-md-between flex-column flex-md-row">
            <h4 className="help-others-intro font-weight-normal ">
              Invest in helping others get their laptop.
              <a href={url} className="text-fml-secondary">
                View more <span className="align-middle d-inline">&gt;</span>
              </a>
            </h4>
            <div className="d-none d-md-flex">
              <h4 className="show-details font-weight-normal pr-md-2 ">
                Show complete details
              </h4>
              <input
                type="checkbox"
                id="toggle"
                className="checkbox d-none"
                defaultChecked
              />
              <label htmlFor="toggle" className="switch" />
            </div>
          </div>
          <div className="contain-arrow-helper">
            <img
              className="slide-control arrow-left d-block"
              src={leftArrow} alt = "leftarrow"
            />
            <img
              className="slide-control arrow-right d-block"
              src={rightArrow} alt = "rightarrow"
            />
            <div className="help-card-contain row mx-0 mb-5 px-0 overflow-auto mt-4">
              <div className="help-card rounded p-3 p-md-3">
                <div className="profile">
                  <span className="placeholder" />
                  <div className="profile-text">
                    <h5>John Doe</h5>
                    <small>Intern</small>
                  </div>
                </div>
                <p className="loan-amount">Loan Amount: $1,000</p>
                <div className="funded-progress">
                  <div className="funded" />
                </div>
                <div className="funded-info">
                  <span className="funded">$700 Funded</span>
                  <span className="fund-left">$300 Left</span>
                </div>
                <div className="w-100" />
                <button className="btn btn-fml-secondary mt-3">
                  Invest Now
                </button>
              </div>
              <div className="help-card rounded p-3 p-md-3">
                <div className="profile">
                  <span className="placeholder" />
                  <div className="profile-text">
                    <h5>John Doe</h5>
                    <small>Intern</small>
                  </div>
                </div>
                <p className="loan-amount">Loan Amount: $1,000</p>
                <div className="funded-progress">
                  <div className="funded" />
                </div>
                <div className="funded-info">
                  <span className="funded">$700 Funded</span>
                  <span className="fund-left">$300 Left</span>
                </div>
                <div className="w-100" />
                <button className="btn btn-fml-secondary mt-3">
                  Invest Now
                </button>
              </div>
              <div className="help-card rounded p-3 p-md-3">
                <div className="profile">
                  <span className="placeholder" />
                  <div className="profile-text">
                    <h5>John Doe</h5>
                    <small>Intern</small>
                  </div>
                </div>
                <p className="loan-amount">Loan Amount: $1,000</p>
                <div className="funded-progress">
                  <div className="funded" />
                </div>
                <div className="funded-info">
                  <span className="funded">$700 Funded</span>
                  <span className="fund-left">$300 Left</span>
                </div>
                <div className="w-100" />
                <button className="btn btn-fml-secondary mt-3">
                  Invest Now
                </button>
              </div>
              <div className="help-card rounded p-3 p-md-3">
                <div className="profile">
                  <span className="placeholder" />
                  <div className="profile-text">
                    <h5>John Doe</h5>
                    <small>Intern</small>
                  </div>
                </div>
                <p className="loan-amount">Loan Amount: $1,000</p>
                <div className="funded-progress">
                  <div className="funded" />
                </div>
                <div className="funded-info">
                  <span className="funded">$700 Funded</span>
                  <span className="fund-left">$300 Left</span>
                </div>
                <div className="w-100" />
                <button className="btn btn-fml-secondary mt-3">
                  Invest Now
                </button>
              </div>
              <div className="help-card rounded p-3 p-md-3">
                <div className="profile">
                  <span className="placeholder" />
                  <div className="profile-text">
                    <h5>John Doe</h5>
                    <small>Intern</small>
                  </div>
                </div>
                <p className="loan-amount">Loan Amount: $1,000</p>
                <div className="funded-progress">
                  <div className="funded" />
                </div>
                <div className="funded-info">
                  <span className="funded">$700 Funded</span>
                  <span className="fund-left">$300 Left</span>
                </div>
                <div className="w-100" />
                <button className="btn btn-fml-secondary mt-3">
                  Invest Now
                </button>
              </div>
              <div className="help-card rounded p-3 p-md-3">
                <div className="profile">
                  <span className="placeholder" />
                  <div className="profile-text">
                    <h5>John Doe</h5>
                    <small>Intern</small>
                  </div>
                </div>
                <p className="loan-amount">Loan Amount: $1,000</p>
                <div className="funded-progress">
                  <div className="funded" />
                </div>
                <div className="funded-info">
                  <span className="funded">$700 Funded</span>
                  <span className="fund-left">$300 Left</span>
                </div>
                <div className="w-100" />
                <button className="btn btn-fml-secondary mt-3">
                  Invest Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </ScrollIntoView>
  );
};
export default FundeeDashboard;

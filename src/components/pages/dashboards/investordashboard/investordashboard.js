import React, { useEffect } from 'react';
import { Link,withRouter } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import './investordashboard.css';
import { Navbar,Footer } from '../../navigation/navigation';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import arrowRight from '../../../assets/images/arrow-right.svg';
import progress from '../../../assets/images/paid-progress.svg';


const InvestorDashboard = () => {
    useEffect(() => {
        //slider scroll feature
        const slideArea = document.querySelector(".investorhelp-card-contain");
        const slide = document.querySelector(".investorhelp-card");
        const controls = document.querySelectorAll(".investorslide-control");
    
        function handleScroll(e) {
          const slideItemWidth = slide.getBoundingClientRect().width;
          if (e.target.classList.contains("investorarrow-left")) {
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


    return(
    <div>
        <Navbar />
        <div className="container px-4" id="investorpage-container">
            <div id="content-wrap">
                <div className="container-main">
                    <div className="">
                        <div>
                            <section className="investoruser">
                                <h1 className="investoruser__intro">Welcome Back, <span className="investortext--secondary">Chandan</span></h1>
                                <p>
                                    Campaingn available for investing. <span><a className="investorpink-text" href="#">View More</a></span>
                                </p>
                            </section>
                            <div class="investorcontain-arrow-helper">
                                <img class="investorslide-control investorarrow-left d-block" src={arrowLeft} />
                                <img class="investorslide-control investorarrow-right d-block" src={arrowRight} />

                                <div class="investorhelp-card-contain row mx-0 px-0 overflow-auto mt-4">
                                    <div class="investorhelp-card rounded p-3 p-md-3">
                                    <div class="investorprofile">
                                        <span class="investorplaceholder"></span>
                                        <div class="investorprofile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="investorloan-amount">Loan Amount: $1,000</p>
                                    <div class="investorfunded-progress">
                                        <div class="investorfunded"></div>
                                    </div>
                                    <div class="investorfunded-info">
                                        <span class="investorfunded">$700 Funded</span>
                                        <span class="investorfund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                    <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                    <div class="investorhelp-card rounded p-3 p-md-3">
                                    <div class="investorprofile">
                                        <span class="investorplaceholder"></span>
                                        <div class="investorprofile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="investorloan-amount">Loan Amount: $1,000</p>
                                    <div class="investorfunded-progress">
                                        <div class="investorfunded"></div>
                                    </div>
                                    <div class="investorfunded-info">
                                        <span class="investorfunded">$700 Funded</span>
                                        <span class="investorfund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                    <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                    <div class="investorhelp-card rounded p-3 p-md-3">
                                    <div class="investorprofile">
                                        <span class="investorplaceholder"></span>
                                        <div class="investorprofile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="investorloan-amount">Loan Amount: $1,000</p>
                                    <div class="investorfunded-progress">
                                        <div class="investorfunded"></div>
                                    </div>
                                    <div class="investorfunded-info">
                                        <span class="investorfunded">$700 Funded</span>
                                        <span class="investorfund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                    <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                    <div class="investorhelp-card rounded p-3 p-md-3">
                                    <div class="investorprofile">
                                        <span class="investorplaceholder"></span>
                                        <div class="investorprofile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="investorloan-amount">Loan Amount: $1,000</p>
                                    <div class="investorfunded-progress">
                                        <div class="investorfunded"></div>
                                    </div>
                                    <div class="investorfunded-info">
                                        <span class="investorfunded">$700 Funded</span>
                                        <span class="investorfund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                    <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                    <div class="investorhelp-card rounded p-3 p-md-3">
                                    <div class="investorprofile">
                                        <span class="investorplaceholder"></span>
                                        <div class="investorprofile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="investorloan-amount">Loan Amount: $1,000</p>
                                    <div class="investorfunded-progress">
                                        <div class="investorfunded"></div>
                                    </div>
                                    <div class="investorfunded-info">
                                        <span class="investorfunded">$700 Funded</span>
                                        <span class="investorfund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                    <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                    <div class="investorhelp-card rounded p-3 p-md-3">
                                    <div class="investorprofile">
                                        <span class="investorplaceholder"></span>
                                        <div class="investorprofile-text">
                                        <h5>John Doe</h5>
                                        <small>Intern</small>
                                        </div>
                                    </div>
                                    <p class="investorloan-amount">Loan Amount: $1,000</p>
                                    <div class="investorfunded-progress">
                                        <div class="investorfunded"></div>
                                    </div>
                                    <div class="investorfunded-info">
                                        <span class="investorfunded">$700 Funded</span>
                                        <span class="investorfund-left">$300 Left</span>
                                    </div>
                                    <div class="w-100"></div>
                                        <button class="btn btn-fml-secondary mt-3">Invest Now</button>
                                    </div>
                                </div>
                            </div>

                            
                            <br />

                            <header className='investoraccount-header'>Here is your account overview</header>
                            <section className="investoraccount investorpadding">
                                <div className="investoraccount__block investororder2">
                                    <div className="investoraccount__block--details">
                                        <small>Invested Amount</small>
                                        <br />
                                        <h2><span>INR</span>50,000</h2>
                                    </div>
                                    <div className="investoraccount__block--details">
                                        <small>Repaid Amount</small>
                                        <br />
                                        <h2><span>INR</span>20,000</h2>
                                    </div>
                                    <div className="investoraccount__block--details investorhide">
                                        <small>Remaining Amount</small>
                                        <br />
                                        <h2><span>INR</span>30,000</h2>
                                    </div>
                                    <div className="investoraccount__block--details investorhide">
                                        <small>Investments</small>
                                        <br />
                                        <h2>6</h2>
                                    </div>
                                    <div className="investoraccount__block--details investorhide">
                                        <small>Average Investment</small>
                                        <br />
                                        <h2><span>INR</span>25,000</h2>
                                    </div>
                                    <div className="investoraccount__block--details investorhide">
                                        <small>Average Interest</small>
                                        <br />
                                        <h2>2.5<span>%</span></h2>
                                    </div>
                                </div>
                                <div className="d-flex investororder1">
                                    <div className="col-7 investordontshow">
                                        <h5 className="text-left mb-0 pb-0">Total Invested Amount</h5><br />
                                        <h6 className="text-left mt-0 pt-0"><small>INR</small>50,000</h6>
                                    </div>
                                    <div className="investorspace investordontshow"></div>
                                    <div className="investoraccount__progress mt-2 mb-3 mr-3">
                                        <img  src={progress} alt="" />
                                    </div>
                                </div>
                                
                            </section>

                            <section className="investortable investortablepadding">
                                <header>Your Investments</header>
                                <div className="investortable__container">
                                    <table>
                                    <thead className="investorthead">
                                        <td>LOAN</td>
                                        <td>AMOUNT</td>
                                        <td>INTEREST RATE</td>
                                        <td>TERM</td>
                                        <td>TOTAL RETURNS</td>
                                        <td>PAYMENT DUE</td>
                                        <td>STATUS</td>
                                    </thead>
                                    <tbody className="investortbody">
                                        <tr>
                                        <td>#7646446</td>
                                        <td>INR 50,000</td>
                                        <td>2.5%</td>
                                        <td>10</td>
                                        <td>INR 1,250</td>
                                        <td> <span><b className="investorday">27</b></span> JUNE</td>
                                        <td>Active</td>
                                        </tr>
                                        <tr>
                                        <td>#7646446</td>
                                        <td>INR 50,000</td>
                                        <td>2.5%</td>
                                        <td>10</td>
                                        <td>INR 1,250</td>
                                        <td> <span><b className="investorday">27</b></span> JUNE</td>
                                        <td>Active</td>
                                        </tr>
                                        <tr>
                                        <td>#7646446</td>
                                        <td>INR 50,000</td>
                                        <td>2.5%</td>
                                        <td>10</td>
                                        <td>INR 1,250</td>
                                        <td> <span><b className="investorday">27</b></span> JUNE</td>
                                        <td>Active</td>
                                        </tr>
                                        <tr>
                                        <td>#7646446</td>
                                        <td>INR 50,000</td>
                                        <td>2.5%</td>
                                        <td>10</td>
                                        <td>INR 1,250</td>
                                        <td> <span><b className="investorday">27</b></span> JUNE</td>
                                        <td>Active</td>
                                        </tr>
                                        <tr>
                                        <td>#7646446</td>
                                        <td>INR 50,000</td>
                                        <td>2.5%</td>
                                        <td>10</td>
                                        <td>INR 1,250</td>
                                        <td> <span><b className="investorday">27</b></span> JUNE</td>
                                        <td>Active</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <Footer />
    </div>
    )
}

export default InvestorDashboard;
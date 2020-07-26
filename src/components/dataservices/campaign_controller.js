import React, { useState, useEffect } from "react";
import "../pages/mainpages/landingPage/landingPage.css";
import arrow from "../pages/mainpages/landingPage/img/arrow.png";
import { Reveal, Tween, Timeline } from "react-gsap";
import axios from "axios";

const Campaign = () => {
    const [trendings, setTrending] = useState("");
    useEffect(() => {
        const apiUrl =
            "https://api.fundmylaptop.com/api/campaigns/fetchSixFeaturedCams";
        axios.get(apiUrl).then((response) => setTrending(response.data.data));
    });

    const FadeInUp = ({ children }) => (
        <Tween from={{ y: 20, opacity: 0 }}>{children}</Tween>
    );
    const FadeInLeft = ({ children }) => (
        <Tween from={{ x: -40, opacity: 0 }}>{children}</Tween>
    );
    const FadeInRight = ({ children }) => (
        <Tween from={{ x: 40, opacity: 0 }}>{children}</Tween>
    );

    return trendings ? (
        <section className="compaign-section">
            <div className="container">
                <Timeline>
                    <div className="row d-flex justify-content-between">
                        <Tween from={{ opacity: 0, y: 30 }} delay={1} duration={1.5}>
                            <h3 className="col-7">Featured Campaigns </h3>
                            <span className="mt-1 btn-view-all ">View All+</span>
                        </Tween>
                    </div>
                </Timeline>
                <div className="row compaign-cards ">
                    {trendings.map((trending) => {
                        return (
                            <div className="col-lg-4 my-3 ">
                                <div className="card ">
                                    <img
                                        className="card-img-top"
                                        src={trending.photoURL}
                                        alt="Camp1"
                                    />
                                    {/* card body */}
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{trending.occupation}</h5>
                                        <span className="card-subtitle ">{trending.title}</span>
                                        <p className="card-text mt-4">{trending.description}</p>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                id="card-progress-bar"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between mt-3 mb-2">
                                            <span className="card-price">
                                                {trending.currency}
                                                {trending.amountAccumulated}
                                            </span>
                                            <span className="card-progress-num">
                                                {trending.repaymentTimes}%
                      </span>
                                        </div>
                                        <span className="card-fonds">
                                            Created at {trending.createdAt}
                                        </span>
                                    </div>
                                    {/* card footer */}

                                    <div className="card-footer d-flex align-center justify-content-between p-0">
                                        <a href className="m-auto ">
                                            {" "}
                      view details <img src={arrow} alt="a4" />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    ) : (
            ""
        );
};

export default Campaign;

import React from 'react';
import styles from './compaign.module.css';
import { Navbar, Footer } from '../../navigation/navigation';
import {Link} from 'react-router-dom';
import '../../../assets/bootstrap.css';
import Image1 from './img/a.png';
import Image2 from './img/b.png';
import Image3 from './img/c.png';
import Image4 from './img/d.png';
import Image5 from './img/e.png';
import Image6 from './img/f.png';
import Image7 from './img/facebook.png';
import Image8 from './img/instagram.png';
import Image9 from './img/twitter.png';
import Image10 from './img/mail.png';

const compaign = () => {
    return (
        <>
        <Navbar/>
        
            <div class={styles.bigCont}>
                <div class="container">
                    {/* eslint-disable-next-line */}
                    <p className="mt-4" className={styles.navHead}>Home / Campaigns page / <span className={styles.specColor}>Compaign</span></p>
                    {/* eslint-disable-next-line */}
                    <p className="mt-4" className={styles.pageHead}>Fund John Doe’s Laptop Purchase</p>

                    <div className={styles.centerDiv}>
                        {/* eslint-disable-next-line */}
                        <img className="img-fluid" className={styles.mainImg}  src={Image1} alt=""></img>
                        {/* eslint-disable-next-line */}
                        <img className="img-fluid" className={styles.playImg}  src={Image2} alt=""></img>


                        {/* ROW  ONE */}
                        <div className="row">
                            <div className="col-sm-6  col-12">
                                <p className={styles.rowParaHead}>Posted by:</p>
                                {/* eslint-disable-next-line */}
                                <div className="list-inline" className={styles.smGrp1}>
                                    <img className="img-fluid list-inline-item" src={Image3} alt=""></img>
                                    {/* eslint-disable-next-line */}
                                    <p className="list-inline-item mt-4" className={styles.row1Para}>John Doe</p>
                                </div>
                            </div>

                            <div className="col-sm-6  col-12">
                                <p className={styles.rowParaHead}>Posted on:</p>
                                <p  className={styles.row1Para}>12/12/2020</p>
                            </div>

                            <hr></hr>
                        </div>


                        {/* ROW  TWO */}
                        <div className="row">
                            <div className="col-sm-6  col-12">
                                <p className={styles.rowParaHead}>Location:</p>
                                <p  className={styles.row2Para}>Lagos, Nigeria</p>
                            </div>

                            <div className="col-sm-6  col-12">
                                <p className={styles.rowParaHead}>Occupation</p>
                                <p  className={styles.row2Para}>Freelance Software Developer</p>
                            </div>

                            <hr></hr>
                        </div>


                        {/* ROW  THREE */}
                        <div>
                            <p className={styles.desc}>Description</p>
                            <p className={styles.descPara}>I run a small freelancing business in the heart of Lagos. My former laptop finally packed up after several attempts at refurbishing it, I would like a loan to get a new laptop to continue my business. My business  <span className={styles.stylee} >loremipsum.com</span>  generates enough money to repay the loan in three months. I would really appreciate funding for this campaign. Thank you for your time 🙂.</p>

                            <hr></hr>
                        </div>

                       
                        {/* ROW  FOUR */}
                        <p className={styles.rowParaHead}>Recommended by:</p>

                        <div  className="list-inline  ml-4" >
                            {/* eslint-disable-next-line */}
                            <div className="list-inline list-inline-item" className={styles.row4Res, styles.row4, styles.smGrp2}>
                                <img className="list-inline-item img-fluid" src={Image6} alt=""></img>
                                {/* eslint-disable-next-line */}
                                <p className="list-inline-item ml-4" className={styles.row2Para}> Jane Doe</p>
                                {/* eslint-disable-next-line */}
                                <p className="list-inline-item ml-4" className={styles.rowParaHead}>11 successsful recommendations</p>
                            </div>
                            {/* eslint-disable-next-line */}
                            <div className="list-inline list-inline-item  ml-4" className={styles.row4Res, styles.row4, styles.smGrp}>
                                <img className="list-inline-item img-fluid" src={Image4} alt=""></img>
                                {/* eslint-disable-next-line */}
                                <p className="list-inline-item" className={styles.row2Para}> Jane Doe</p>
                                {/* eslint-disable-next-line */}
                                <p className="list-inline-item" className={styles.rowParaHead}>7 successsful recommendations</p>
                            </div>
                        </div>

                        <div className="list-inline  ml-4">
                            {/* eslint-disable-next-line */}
                            <div className="list-inline list-inline-item" className={styles.row4Res, styles.row4, styles.smGrp2}>
                                <img className="list-inline-item img-fluid" src={Image5} alt=""></img>
                                {/* eslint-disable-next-line */}
                                <p className="list-inline-item" className={styles.row2Para}> Jane Doe</p>
                                {/* eslint-disable-next-line */}
                                <p className="list-inline-item" className={styles.rowParaHead}>6 successsful recommendations</p>
                            </div>
                            {/* eslint-disable-next-line */}
                            <div className="list-inline list-inline-item" className={styles.row4Re, styles.row4, styles.smGrp3}>
                                {/* eslint-disable-next-line */}
                                <Link to=""><p className="list-inline-item" className={styles.rowParaHead, styles.specColor}>View recommender details</p></Link>
                            </div>

                            <hr></hr>
                        </div>

                        {/* ROW  FIVE */}
                        <div className="row">
                            <div className="col-sm-6  col-12">
                                <p className={styles.rowParaHead}> Loan amount:</p>
                                {/* eslint-disable-next-line */}
                                <p  className="font-weight-bold" className={styles.row1Para}>N 250,000</p>
                            </div>

                            <div className="col-sm-6  col-12">
                                <p className={styles.rowParaHead}>Proposed Repayment period:</p>
                                <p className={styles.row1Para}>3 months</p>
                            </div>

                            <hr></hr>

                        </div>

                        {/* ROW  SIX */}
                        <div className="row">
                            <div className="col-sm-9  col-12">
                                {/* eslint-disable-next-line */}
                                <p className={styles.row2Para}>Get a <span className="font-weight-bold">N 275,000</span>repayment in 3 months if you fund this loan</p>
                            </div>
                            {/* eslint-disable-next-line */}
                            <div className="col-sm-3  col-12" className={styles.resCenter}>
                                {/* eslint-disable-next-line */}
                                <button className="text-light"  className={styles.btn} type="submit">Fund this loan</button>
                            </div>

                            <hr></hr>

                        </div>

                        {/* ROW  SEVEN */}

                        <div className="row">
                            <div className="col-sm-8  col-12">
                                <p className={styles.row2Para}>Can’t fund? Want to help? Share this campaign on social media </p>
                            </div>

                            <div className="col-sm-4  col-12">
                                {/* eslint-disable-next-line */}
                                <div className="list-inline"  className={styles.resCenter}>
                                    <img   className={styles.socialImg} src={Image7} alt=""></img>
                                    {/* eslint-disable-next-line */}
                                    <img className="ml-4" className={styles.socialImg} src={Image9} alt=""></img>
                                    {/* eslint-disable-next-line */}
                                    <img className="ml-4"  className={styles.socialImg} src={Image10} alt=""></img>
                                    {/* eslint-disable-next-line */}
                                    <img className="ml-4" className={styles.socialImg} src={Image8} alt=""></img>
                                </div>
                            </div>
                        </div>
                   
        
                    </div>

                </div>

            </div>
         
          
        <Footer/>
        </>
    )
}

export default compaign

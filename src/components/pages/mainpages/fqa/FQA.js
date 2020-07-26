import React from 'react';
import {Tween, Timeline } from "react-gsap";
import FQACss from './FQA.module.css'
import seach from './search.svg'
import { Navbar,Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'


const FQA = () => {
    
    function myload (){
        document.getElementById("link1").classList.add(FQACss.active);
        document.getElementById("info1").classList.toggle(FQACss.show);
        document.getElementById("info1-s-1").classList.toggle(FQACss.none);
        document.getElementById("info1-s-2").classList.toggle(FQACss.show);
        document.getElementById("q1").classList.add(FQACss.show);


    };
    function currentLink1() {

      document.getElementById("link1").classList.add(FQACss.active);
      document.getElementById("link2").classList.remove(FQACss.active);
      document.getElementById("link3").classList.remove(FQACss.active);
      document.getElementById("link4").classList.remove(FQACss.active);
      document.getElementById("link5").classList.remove(FQACss.active);

      
      document.getElementById("q1").classList.remove(FQACss.none);
      document.getElementById("q2").classList.remove(FQACss.show);
      document.getElementById("q3").classList.remove(FQACss.show);
      document.getElementById("q4").classList.remove(FQACss.show);
      document.getElementById("q5").classList.remove(FQACss.show);
     
       
      }
      function currentLink2() {

        document.getElementById("link2").classList.add(FQACss.active);
        document.getElementById("link1").classList.remove(FQACss.active);
        document.getElementById("link3").classList.remove(FQACss.active);
        document.getElementById("link4").classList.remove(FQACss.active);
        document.getElementById("link5").classList.remove(FQACss.active);

        document.getElementById("q2").classList.add(FQACss.show);
      document.getElementById("q1").classList.add(FQACss.none);
      document.getElementById("q3").classList.remove(FQACss.show);
      document.getElementById("q4").classList.remove(FQACss.show);
      document.getElementById("q5").classList.remove(FQACss.show);
       
      }
      function currentLink3() {

        document.getElementById("link3").classList.add(FQACss.active);
        document.getElementById("link2").classList.remove(FQACss.active);
        document.getElementById("link1").classList.remove(FQACss.active);
        document.getElementById("link4").classList.remove(FQACss.active);
        document.getElementById("link5").classList.remove(FQACss.active);
       
        document.getElementById("q3").classList.add(FQACss.show);
      document.getElementById("q2").classList.remove(FQACss.show);
      document.getElementById("q1").classList.add(FQACss.none);
      document.getElementById("q4").classList.remove(FQACss.show);
      document.getElementById("q5").classList.remove(FQACss.show);
       
      }
      function currentLink4() {

        document.getElementById("link4").classList.add(FQACss.active);
        document.getElementById("link2").classList.remove(FQACss.active);
        document.getElementById("link1").classList.remove(FQACss.active);
        document.getElementById("link3").classList.remove(FQACss.active);
        document.getElementById("link5").classList.remove(FQACss.active);

        document.getElementById("q4").classList.add(FQACss.show);
        document.getElementById("q2").classList.remove(FQACss.show);
        document.getElementById("q3").classList.remove(FQACss.show);
        document.getElementById("q1").classList.add(FQACss.none);
        document.getElementById("q5").classList.remove(FQACss.show);
      }
      function currentLink5() {

        document.getElementById("link5").classList.add(FQACss.active);
        document.getElementById("link2").classList.remove(FQACss.active);
        document.getElementById("link1").classList.remove(FQACss.active);
        document.getElementById("link3").classList.remove(FQACss.active);
        document.getElementById("link4").classList.remove(FQACss.active);
       
        document.getElementById("q5").classList.add(FQACss.show);
      document.getElementById("q2").classList.remove(FQACss.show);
      document.getElementById("q3").classList.remove(FQACss.show);
      document.getElementById("q4").classList.remove(FQACss.show);
      document.getElementById("q1").classList.add(FQACss.none);
      }

    //   new 
    function handleClickk(e) {
        e.preventDefault();
        document.getElementById("info11").classList.toggle(FQACss.show);

        document.getElementById("info11-s-1").classList.toggle(FQACss.none);
        document.getElementById("info11-s-2").classList.toggle(FQACss.show);
      }

      function handleClick11(e) {
        e.preventDefault();
        
        document.getElementById("info22").classList.toggle(FQACss.show);
        document.getElementById("info22-s-1").classList.toggle(FQACss.none);
        document.getElementById("info22-s-2").classList.toggle(FQACss.show);
      }

      function handleClick22(e) {
        e.preventDefault();
        document.getElementById("info33").classList.toggle(FQACss.show);
        document.getElementById("info33-s-1").classList.toggle(FQACss.none);
        document.getElementById("info33-s-2").classList.toggle(FQACss.show);
      }

      function handleClick33(e) {
        e.preventDefault();
        document.getElementById("info44").classList.toggle(FQACss.show);
        document.getElementById("info44-s-1").classList.toggle(FQACss.none);
        document.getElementById("info44-s-2").classList.toggle(FQACss.show);
      }



      function handleClickkk(e) {
        e.preventDefault();
        document.getElementById("info111").classList.toggle(FQACss.show);

        document.getElementById("info111-s-1").classList.toggle(FQACss.none);
        document.getElementById("info111-s-2").classList.toggle(FQACss.show);
      }

      function handleClick111(e) {
        e.preventDefault();
        
        document.getElementById("info222").classList.toggle(FQACss.show);
        document.getElementById("info222-s-1").classList.toggle(FQACss.none);
        document.getElementById("info222-s-2").classList.toggle(FQACss.show);
      }

      function handleClick222(e) {
        e.preventDefault();
        document.getElementById("info333").classList.toggle(FQACss.show);
        document.getElementById("info333-s-1").classList.toggle(FQACss.none);
        document.getElementById("info333-s-2").classList.toggle(FQACss.show);
      }

      function handleClick333(e) {
        e.preventDefault();
        document.getElementById("info444").classList.toggle(FQACss.show);
        document.getElementById("info444-s-1").classList.toggle(FQACss.none);
        document.getElementById("info444-s-2").classList.toggle(FQACss.show);
      }



      function handleClickkkk(e) {
        e.preventDefault();
        document.getElementById("info1111").classList.toggle(FQACss.show);

        document.getElementById("info1111-s-1").classList.toggle(FQACss.none);
        document.getElementById("info1111-s-2").classList.toggle(FQACss.show);
      }

      function handleClick1111(e) {
        e.preventDefault();
        
        document.getElementById("info2222").classList.toggle(FQACss.show);
        document.getElementById("info2222-s-1").classList.toggle(FQACss.none);
        document.getElementById("info2222-s-2").classList.toggle(FQACss.show);
      }

      function handleClick2222(e) {
        e.preventDefault();
        document.getElementById("info3333").classList.toggle(FQACss.show);
        document.getElementById("info3333-s-1").classList.toggle(FQACss.none);
        document.getElementById("info3333-s-2").classList.toggle(FQACss.show);
      }

      function handleClick3333(e) {
        e.preventDefault();
        document.getElementById("info4444").classList.toggle(FQACss.show);
        document.getElementById("info4444-s-1").classList.toggle(FQACss.none);
        document.getElementById("info4444-s-2").classList.toggle(FQACss.show);
      }

     

      function handleClickkkkk(e) {
        e.preventDefault();
        document.getElementById("info11111").classList.toggle(FQACss.show);

        document.getElementById("info11111-s-1").classList.toggle(FQACss.none);
        document.getElementById("info11111-s-2").classList.toggle(FQACss.show);
      }

      function handleClick11111(e) {
        e.preventDefault();
        
        document.getElementById("info22222").classList.toggle(FQACss.show);
        document.getElementById("info22222-s-1").classList.toggle(FQACss.none);
        document.getElementById("info22222-s-2").classList.toggle(FQACss.show);
      }

      function handleClick22222(e) {
        e.preventDefault();
        document.getElementById("info33333").classList.toggle(FQACss.show);
        document.getElementById("info33333-s-1").classList.toggle(FQACss.none);
        document.getElementById("info33333-s-2").classList.toggle(FQACss.show);
      }

      function handleClick33333(e) {
        e.preventDefault();
        document.getElementById("info44444").classList.toggle(FQACss.show);
        document.getElementById("info44444-s-1").classList.toggle(FQACss.none);
        document.getElementById("info44444-s-2").classList.toggle(FQACss.show);
      }

     





    function handleClick(e) {
        e.preventDefault();
        document.getElementById("info1").classList.toggle(FQACss.show);

        document.getElementById("info1-s-1").classList.toggle(FQACss.none);
        document.getElementById("info1-s-2").classList.toggle(FQACss.show);
      }

      function handleClick1(e) {
        e.preventDefault();
        
        document.getElementById("info2").classList.toggle(FQACss.show);
        document.getElementById("info2-s-1").classList.toggle(FQACss.none);
        document.getElementById("info2-s-2").classList.toggle(FQACss.show);
      }

      function handleClick2(e) {
        e.preventDefault();
        document.getElementById("info3").classList.toggle(FQACss.show);
        document.getElementById("info3-s-1").classList.toggle(FQACss.none);
        document.getElementById("info3-s-2").classList.toggle(FQACss.show);
      }

      function handleClick3(e) {
        e.preventDefault();
        document.getElementById("info4").classList.toggle(FQACss.show);
        document.getElementById("info4-s-1").classList.toggle(FQACss.none);
        document.getElementById("info4-s-2").classList.toggle(FQACss.show);
      }
   
    return(
       <ScrollIntoView>
        <Navbar/>
        <div onLoad={myload} className={FQACss.fqa} id="mainPage">
        <Timeline>

            <div className={FQACss.container}>

           <Tween from={{ opacity: 0, y: 70 }} duration={0.8}>

                <h1 className={FQACss.h1}>How can we help you</h1>

            </Tween>

          <Tween from={{ opacity: 0, y: 30 }} duration={1}>

                <div className={FQACss.grid}>
                <input className={FQACss.input1} type="text"  placeholder="Describe your issue"></input><button  className={FQACss.btn} >
                    <img src={seach} alt="search-bar"></img>
                </button>
                </div>

              </Tween>

           <Tween from={{ opacity: 0, y: -30 }} duration={0.5}>

                <p className={FQACss.p}>You can also browse the topics below to find what you’re looking for</p>
            </Tween>
           
            </div>
    


            {/* Question 1 */}
           <div className={FQACss.question1} >
                <div className={FQACss.container1}>
                
                <ul style={{paddingTop:"1rem"}}>
                    <li onClick={currentLink1} id="link1" className={FQACss.fqaLink1 }>Getting Started</li>
                    <li onClick={currentLink2} id="link2" className={FQACss.fqaLink2}>Funding</li>
                    <li onClick={currentLink3} id="link3" className={FQACss.fqaLink3}>Menu III</li>
                    <li onClick={currentLink4} id="link4" className={FQACss.fqaLink4}>Menu IV</li>
                    <li onClick={currentLink5} id="link5" className={FQACss.fqaLink5}>Menu V</li>
                </ul>
                </div>               
                <div  id="q1"  className={FQACss.q1}>
                <h1 className={FQACss.h3}>Getting Started</h1>
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p className={FQACss.pTop}>What is FundMy<span className={FQACss.red} >Laptop</span> and how does it work ? </p> <p onClick={handleClick}  ><span className={FQACss.minplus} id="info1-s-1">+</span><span className={FQACss.minplus2} id="info1-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info1">
                        <p className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* second */}
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>In what countries can i apply for a laptop ? </p> <p onClick={handleClick1} ><span className={FQACss.minplus} id="info2-s-1">+</span><span className={FQACss.minplus2} id="info2-s-2">-</span></p>
                    </div>
                    <div id="info2" className={FQACss.divP2} >
                        <p  className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* thried */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>Question III ? </p><p onClick={handleClick2} ><span className={FQACss.minplus} id="info3-s-1">+</span><span className={FQACss.minplus2} id="info3-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info3">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* forth */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                    <p className={FQACss.pTop}>I am broke,how do i contribute ? </p><p onClick={handleClick3} ><span className={FQACss.minplus} id="info4-s-1">+</span><span className={FQACss.minplus2} id="info4-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info4">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>
                </div>               



           {/* Question 2 */}
           <div id="q2"  className={FQACss.q2}>
                <h1 className={FQACss.h3}>Funding</h1>
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p className={FQACss.pTop}>Funding</p> <p onClick={handleClickk}  ><span className={FQACss.minplus} id="info11-s-1">+</span><span className={FQACss.minplus2} id="info11-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info11">
                        <p className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* second */}
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>Wht is FML ?</p> <p onClick={handleClick11} ><span className={FQACss.minplus} id="info22-s-1">+</span><span className={FQACss.minplus2} id="info22-s-2">-</span></p>
                    </div>
                    <div id="info22" className={FQACss.divP2} >
                        <p  className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* thried */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>How do I contribute ? </p><p onClick={handleClick22} ><span className={FQACss.minplus} id="info33-s-1">+</span><span className={FQACss.minplus2} id="info33-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info33">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* forth */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                    <p className={FQACss.pTop}>Questions ? </p><p onClick={handleClick33} ><span className={FQACss.minplus} id="info44-s-1">+</span><span className={FQACss.minplus2} id="info44-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info44">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>
                </div>               

           {/* Question 3 */}
           <div id="q3" className={FQACss.q3}>
                <h1 className={FQACss.h3}>Menu III</h1>
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p className={FQACss.pTop}>Menu III</p> <p onClick={handleClickkk}  ><span className={FQACss.minplus} id="info111-s-1">+</span><span className={FQACss.minplus2} id="info111-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info111">
                        <p className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* second */}
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>I need a laptop ? </p> <p onClick={handleClick111} ><span className={FQACss.minplus} id="info222-s-1">+</span><span className={FQACss.minplus2} id="info222-s-2">-</span></p>
                    </div>
                    <div id="info222" className={FQACss.divP2} >
                        <p  className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* thried */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>Question III ? </p><p onClick={handleClick222} ><span className={FQACss.minplus} id="info333-s-1">+</span><span className={FQACss.minplus2} id="info333-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info333">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* forth */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                    <p className={FQACss.pTop}>Can I get two laptops ? </p><p onClick={handleClick333} ><span className={FQACss.minplus} id="info444-s-1">+</span><span className={FQACss.minplus2} id="info444-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info444">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>
                </div>               


               {/* Question 4 */}
               <div id="q4" className={FQACss.q4}>
                <h1 className={FQACss.h3}>Menu IV</h1>
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p className={FQACss.pTop}>Menu IV</p> <p onClick={handleClickkkk}  ><span className={FQACss.minplus} id="info1111-s-1">+</span><span className={FQACss.minplus2} id="info1111-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info1111">
                        <p className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* second */}
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>I what to contribute ? </p> <p onClick={handleClick1111} ><span className={FQACss.minplus} id="info2222-s-1">+</span><span className={FQACss.minplus2} id="info2222-s-2">-</span></p>
                    </div>
                    <div id="info2222" className={FQACss.divP2} >
                        <p  className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* thried */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>I need a Laptop ?! </p><p onClick={handleClick2222} ><span className={FQACss.minplus} id="info3333-s-1">+</span><span className={FQACss.minplus2} id="info3333-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info3333">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* forth */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                    <p className={FQACss.pTop}>What is a Laptop ? </p><p onClick={handleClick3333} ><span className={FQACss.minplus} id="info4444-s-1">+</span><span className={FQACss.minplus2} id="info4444-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info4444">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>
                </div>               

              {/* Question 5 */}
              <div id="q5" className={FQACss.q5}>
                <h1 className={FQACss.h3}>Menu V</h1>
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p className={FQACss.pTop}>Menu V</p> <p onClick={handleClickkkkk}  ><span className={FQACss.minplus} id="info11111-s-1">+</span><span className={FQACss.minplus2} id="info11111-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info11111">
                        <p className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* second */}
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>I need a laptop ? </p> <p onClick={handleClick11111} ><span className={FQACss.minplus} id="info22222-s-1">+</span><span className={FQACss.minplus2} id="info22222-s-2">-</span></p>
                    </div>
                    <div id="info22222" className={FQACss.divP2} >
                        <p  className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* thried */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>Question III ? </p><p onClick={handleClick22222} ><span className={FQACss.minplus} id="info33333-s-1">+</span><span className={FQACss.minplus2} id="info33333-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info33333">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* forth */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                    <p className={FQACss.pTop}>Can I give out my laptop ? </p><p onClick={handleClick33333} ><span className={FQACss.minplus} id="info44444-s-1">+</span><span className={FQACss.minplus2} id="info44444-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info44444">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>
                </div>      
           </div>



           <div className={FQACss.pdT}><h1 className={FQACss.h1}> Looking For Something Else ?</h1>
            <div className={FQACss.center}>
                <a href="/"  className={FQACss.contactBtn}>Contact us <span className={FQACss.greaterthan}>&gt;</span></a>
            </div>  </div>       
        </Timeline>
        </div>
       <Footer/>
       </ScrollIntoView>
    )
}

export default FQA;
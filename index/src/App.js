import { motion, useScroll, useTransform,AnimatePresence  } from "framer-motion"

import { useState } from 'react';
import Style from './App.css'
import Img from './asset/Img.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './asset/Moosa Resume.pdf'
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
function Index() {

  const [show, setShow]=useState(false)
  const showCom=()=>{
    if (show==false) {
      setShow(true)
    }
  }
  return (
    <>

 <AnimatePresence> 
      <div id="Main">
        <div id='pg1' className="page1">


          <div className="nav">

          { show && (<PageTwo style={{width:"100%",position:"absolute",Top:"150%"}}/>)}
            <a href='#pg2'>   <svg onClick={showCom}
              xmlns="http://www.w3.org/2000/svg" width="80" height="50" fill="White" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" />
            </svg></a>

          </div>
          
          <div className='blur'>
           
            <h1>W</h1>
            <br/>
            <h1>E</h1>
            <br/>
            <h1>B</h1>

            <br/>
            <br/>
            <h1>D</h1><br/>
            <h1>E</h1><br/>
            <h1>V</h1><br/>
            <h1>E</h1><br/>
            <h1>L</h1><br/>
            <h1>O</h1><br/>
            <h1>P</h1><br/>
            <h1>E</h1><br/>
            <h1>R</h1>

   
          
            </div> 



 {/* <div className='blur2'></div> */}
          <h1>MUHAMMAD</h1>
          <h3>MOOSA</h3>

          <div className='Resume'>
            <a download={Resume} href={Resume}> <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5" />
            </svg> </a>
            <h5>RESUME</h5>
          </div>
        </div>
 
        <img src={Img} />
      </div>
      </AnimatePresence>
    </>
  );
}

export default Index;
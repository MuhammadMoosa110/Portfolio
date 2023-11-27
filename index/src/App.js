import { useState } from 'react';
import Style from './App.css'
import Img from './asset/Img.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
function Index() {
  const [show,setShow]=useState(true)
  
  const click=()=>{
    setShow(false)
  }
  
  const newClick=()=>{
    setShow(true)
  }
  
  return (
    <>
    
      <div id="Main"> 
        <div className="page1">


        <div className="nav">
          <h2 id='logo'>LOGO</h2>
     
        <a href='#pg2'>   <svg onClick={click}
         xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
</svg></a>
     
         </div>
        <div className='blur'></div><div className='blur1'></div>


          <img src={Img} /><div className='blur2'></div>
          <h1>MUHAMMAD</h1>
          <h3>MOOSA</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5" />
          </svg>
        </div>

        <div className='page2'>
          <div id='pg2'><h1>ABOUT</h1>
          <a href='#pg2'>   <svg onClick={click}
         xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
</svg></a>
          
          </div>
        </div>
        <div className='page3'></div>
      </div>
    </>
  );
}

export default Index;
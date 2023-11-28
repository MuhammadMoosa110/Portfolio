import { useState } from 'react';
import Style from './App.css'
import Img from './asset/Img.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './asset/Moosa Resume.pdf'
function Index() {
  const [show, setShow] = useState(true)

  const click = () => {
    setShow(false)
  }

  const newClick = () => {
    setShow(true)
  }

  return (
    <>

      <div id="Main">
        <div id='pg1' className="page1">


          <div className="nav">


            <a href='#pg2'>   <svg onClick={click}
              xmlns="http://www.w3.org/2000/svg" width="80" height="50" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" />
            </svg></a>

          </div>
          <div className='blur'></div><div className='blur1'></div>


          <img src={Img} />
          {/* <div className='blur2'></div> */}
          <h1>MUHAMMAD</h1>
          <h3>MOOSA</h3>

          <div className='Resume' style={{ display: "flex", marginLeft: "50%", marginTop: "4.2%" }}>
            <a download={Resume} href={Resume}> <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5" />
            </svg> </a>
            <h5 style={{ marginTop: "9%", marginLeft: "-7%", color: "white", fontFamily: "Orbitron" }}>RESUME</h5>
          </div>
        </div>

        <div className='page2'>
          <div id='pg2'><h1>ABOUT</h1>
          <div style={{display:"flex",justifyContent:"space-between" , marginTop:"-3.2%",marginLeft:"-2.5%",padding:"0px 10%",width:"100%"}}>   <a href='#pg3'>   <svg onClick={click}
              xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" />
            </svg></a>

            <a href='#pg1' >     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="White" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5" />
            </svg></a>
            </div> 
          </div>
        </div>
        <div id='pg3' className='page3'>
          <a style={{justifyContent:"center",textAlign:"center",alignItems:"center"}} href='#pg2'>    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="black" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5" />
            </svg>PREVIOUS</a> 

          <h1>PROJECTS</h1>

          <svg className='svg2' xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg> 
        </div>
      </div>
    </>
  );
}

export default Index;
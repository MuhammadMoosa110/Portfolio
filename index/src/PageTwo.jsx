import { useState } from 'react';
import Style from './App.css'
import PageThree from './PageThree';
function PageTwo() {
    
  const [showTwo, setShowTwo] = useState(false)

  const click = () => {
    if (showTwo==false) {
        setShowTwo(true)
    }
 
}
     return ( 
        <>
                <div className='page2'>
             
          { showTwo && (<PageThree style={{width:"100%",position:"absolute",Top:"150%"}}/>)}
          <div style={{display:"flex",justifyContent:"space-between"  ,padding:"20px 10%",width:"100%"}}>   
          <a href='#pg3'>   <svg onClick={click}
              xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" />
            </svg></a>

            <div   id='about' className='about'>
             <h1 id='pg2'>ABOUT</h1>
             <div className='aboutIn'> 
             <h2 style={{color:"white"}}>HI THERE</h2>
             <p>I am a React Developer i have an 6 years experiance in react next java and i am also proeffient in backend as well</p>  
             </div>
          </div>
            <a href='#pg1' >     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="White" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5" />
            </svg></a>
            </div> 
          </div>
         <div>
           
         </div>

        </>
     );
}

export default PageTwo;
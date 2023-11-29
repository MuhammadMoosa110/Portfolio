import Style from './App.css'
function PageThree() {
    return ( 
        <>
        <h1  style={{marginTop:"2%",color:"#000"}}> PROJECTS</h1> 
        <div id='pg3' className='page3'>
          <a style={{justifyContent:"center",textAlign:"center",alignItems:"center",marginBottom:"20%"}} href='#pg2'>     
          PREVIOUS</a> 
           

            <div className='mainCard'>
                <div className='card'></div>
                <div className='card1'></div>
                <div className='card2'></div>
                <div className='card'></div>
            </div>
        </div> 

        </>
     );
}

export default PageThree;
import Style from './App.css'
import Img from './asset/Pic 1.PNG'
function PageThree() {
    return ( 
        <>
        
        <div id='pg3' className='page3'>
          <a style={{justifyContent:"center",textAlign:"center",alignItems:"center",marginBottom:"20%"}} href='#pg2'>     
          PREVIOUS</a>
          <h1>PROJECTS</h1> 
           

            <div className='mainCard' style={{marginTop:'10%'}}>
                 <div className='card1'>
                    
                    <a target='blank' href='https://www.figma.com/proto/c1N9POg2QYxrUWdUOlk8N2/Untitled?node-id=24-12&starting-point-node-id=24%3A12&scaling=scale-down'><h1> UI DESIGN TWO </h1></a>
                     
                 </div>
                <div className='card2'>
                <a target='blank' href='https://www.figma.com/proto/CtffssT9YMNzRNkTmsypTH/Travel-Agency?type=design&node-id=1-2&t=Ou1pTe61DprBBaf6-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2'><h1> UI DESIGN THREE </h1></a>
                </div>
                <div className='card'>
                <a target='blank' href='https://www.figma.com/proto/c1N9POg2QYxrUWdUOlk8N2/Untitled?node-id=24-12&starting-point-node-id=24%3A12&scaling=scale-down'><h1> UI DESIGN ONE </h1></a>
                </div>
            </div>
        </div> 

        </>
     );
}

export default PageThree;
import React from 'react'
import './contenedor.css'
import Leftcontent from './Components/leftcontent/leftcontent';
import RightContent from './Components/rightContent/rightContent';
import NowPlayingBar from './Components/nowPlayingBar/nowPlayingBar';


const contenedor = () => {
  return (
    
      <div id="main">
          <div className="allContentSpt">
            
              <Leftcontent />
              <RightContent />
              <NowPlayingBar />


          </div>
      </div>
    
          
    
  )
}

export default contenedor

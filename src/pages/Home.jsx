import { useState } from 'react'
import Hud from '../components/organisms/Hud';
import { Helmet } from 'react-helmet-async';


function Home(){
    return(
        <div id='calc_home'>
            <Helmet>
                <title>Reproductor</title>
            </Helmet>
           <Hud ></Hud>
            
        </div>
    )
    
}
export default Home

import { useEffect, useState } from 'react'
import '../organisms/Hud.css'
import Button from '../atoms/Button'
import View from '../molecules/View'
import songs from '../../Songs/Songs'
function Hud()
{
    const[cancion,setCancion]=useState(0);
    const [audio,setAudio]= useState(new Audio());
    const [estado,setEstado]= useState(false);
    const cambio=()=>{
       if (songs[cancion]) {
        audio.src = songs[cancion].archivo;
        if (estado) {
            audio.play();
        }
       }
    }
    useEffect(cambio,[cancion]);
    const playSong=()=>{
       if (estado) {
        audio.pause();
       }else{
        audio.play();
       }
       setEstado(!estado);
    }
    const prevSong = ()=>{
        setCancion((cancion-1+songs.length)%songs.length);
    }
    const nextSong=()=>{
        setCancion((cancion+1)%songs.length)
    }
    return(
        <div id='view-style'>
            <div id='info-view'>
            <View image={songs[cancion].imagen} text={songs[cancion].nombre}></View>
            </div>
            <div id='controls'>
            <Button title={'Anterior'} onClick={()=>prevSong()}>{}</Button>
            <Button title={estado ? 'Pausar' : 'Reproducir'} onClick={()=>playSong()}></Button>
            <Button title="Siguiente" onClick={()=>nextSong()}></Button>
            </div>
        </div>
    )
}
export default Hud;
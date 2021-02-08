import React, { useEffect, useState } from 'react'
import audio from './../../assets/audio/example.mp3'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PlayerContainer, PlayIcon } from './StyledStyles'

export const MusicPlayer = () => {
     
    function _handleClick() {
        let music = document.getElementById('music');
        if(music.paused){
            music.play()
        }
        else{
            music.pause()
        }
    }
    useEffect( () => {
        
    })
    const [play, setPlaying] = useState(false);

    return(
    <PlayerContainer>
        <audio id="music" onPlay={ () => setPlaying(!play) } onPause={ () => setPlaying(!play) } src={ audio } />
        <PlayIcon>
            <FontAwesomeIcon onClick={ _handleClick } role="button" icon={ play === false ? faPlay : faPause }/>
        </PlayIcon>
        {`Selena Gomez - Kill Em With Kidnnes( Alex Second Remix)`}  
    </PlayerContainer>
          
    )
}
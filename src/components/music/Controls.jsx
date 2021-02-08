import React, { useState } from 'react';

import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MusicControls = ({music}) => {
    const [played, setPlayed] = useState(false)
    if(music.play){
        setPlayed(!played)
    }
    return(
    <>
        <FontAwesomeIcon role="button" icon={ played == true ? faPlay : faPause }/>
    </>
    )
}
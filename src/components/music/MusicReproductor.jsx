import React, { useEffect, useState } from 'react'
import audio from './../../assets/audio/example.mp3'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MusicCaption, MusicTitle, PlayerContainer, PlayIcon, MusicArtist, Poster, MusicStart, PosterStart, PosterSongLeyend } from './StyledStyles'
import { useSelector } from 'react-redux'
import starPoster from './../../assets/images/selena_poster.jpg'
import pathPoster from './../../assets/audio/selena_gomez.mp3'
import { Container } from '../container'

export const MusicPlayer = () => {
    const Songs = useSelector((state) => state.Songs);

    const [play, setPlaying] = useState(false);
    const [musicCurrent, setMusicCurrent] = useState({title: '', artist: '', path: '', poster: ''})
    async function _handleClick() {
        let music = document.getElementById('music');
        console.log((music.duration / 60).toFixed(2));
        if(music.paused){
            await music.play()
        }
        else{
            music.pause()
        }
    }

    const starSong = {
        poster: starPoster,
        title: 'Kill em With Kindness (|AS| Remix)',
        artist: 'Selena Gomez',
        path: pathPoster
    }
    const _changeMusic = (title, artist, path, poster) => {
        setMusicCurrent({...musicCurrent, title, artist, path, poster})
    }
    useEffect( () => {
        
    })

    return(
    <>
    <Container withPadding="10">
        <MusicStart onClick={() => _changeMusic(starSong.title, starSong.artist, starSong.path, starSong.poster)}>
            <PosterStart src={ starSong.poster } />
            <PosterSongLeyend>
                <MusicTitle>{ starSong.title }</MusicTitle>
                <MusicArtist>{ starSong.artist }</MusicArtist>
            </PosterSongLeyend>
        </MusicStart>
        {
        Songs.map( (sg) => (
                <MusicCaption key={sg.id} onClick={() => _changeMusic(sg.title, sg.artist, sg.path, sg.poster)}>
                    <Poster src={sg.poster} alt="" srcset=""/>
                    <div className="caption-center">
                        <MusicTitle>{ sg.title }</MusicTitle>
                        <MusicArtist>{ sg.artist }</MusicArtist>
                    </div>
                </MusicCaption>  
        ))
        }      
    </Container> 
    {
        musicCurrent.title !== ''
        ? <PlayerContainer>
            <Poster src={musicCurrent.poster} alt=""/>
            <audio autoPlay id="music" onPlay={ () => setPlaying(true) } onPause={ () => setPlaying(false) } src={ musicCurrent.path } >
                <track default/>
            </audio>
            <PlayIcon>
                <FontAwesomeIcon onClick={ _handleClick } role="button" icon={ play === false ? faPlay : faPause }/>
            </PlayIcon>
            <div className="caption-center">
                <MusicTitle>{ musicCurrent.title }</MusicTitle>
                <MusicArtist>{ musicCurrent.artist }</MusicArtist>
            </div>
        </PlayerContainer>
        : <></>
    }
    </>
    )
}
import styled from "styled-components";

export const PlayerContainer = styled.div`
    width: 100%;
    background-color: var(--dark-primary);
    padding: 1rem;
    position: fixed;
    display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 600;
    z-index: 2000;
`;

export const MusicStart = styled.figure`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem .5rem;
    background-color: rgba(27, 36, 27, 0.432);
    border-radius: 2px;
    margin-bottom: 3rem;
    cursor: pointer;
    @media(min-width: 1200px){
        width: 60%;
    }
`;

export const PosterStart = styled.img`
    width: 13rem;
    height: 13rem;
    margin: 0 auto;
    display: block;
    @media(min-width: 1200px){
        width: 15rem;
        height: 15rem;
    }
`;

export const PosterSongLeyend = styled.div`
    text-align: center;
    padding: 1rem;
`;

export const PlayIcon = styled.span`
    position: relative;
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
    margin: 0 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    ::after{
        position: absolute;
        content: "";
        display: block;
        top: 0;
        bottom: 0;
        right: 0;
        left:0;
        z-index: -1;
        border-radius: 50%;
        border: 1px solid silver;
    }
`;

export const MusicCaption = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #4545;
    border: 2px solid var(--blue-primary);
    border-radius: 3px;
    margin-bottom: .5rem;
    padding: .5rem;
    :hover{
        cursor: pointer;
        background-color:  rgba(27, 36, 27, 0.432);
    }
    .caption-center{
        padding: 0 10px;
    }
`;

export const MusicTitle = styled.h3`
    color: #c9c9c9;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const MusicArtist = styled.p`
    color: teal;
`;

export const Poster = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
`;

export const MusicMapContainer = styled.div`
    display: block;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 28vh;
`;
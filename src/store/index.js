
import { createStore } from 'redux';
import selena_mp3 from './../assets/audio/selena_gomez.mp3'
import zara_mp3 from './../assets/audio/zara_larsson.mp3'
import selena_poster from './../assets/images/selena_poster.jpg'
import zara_poster from './../assets/images/zara_poster.jpg'

const initialState = {
  Songs: [
    {
        id: 1,
        title: 'Kill em With Kindness (|A| Remix)',
        artist: 'Selena Gomez',
        path: selena_mp3,
        poster: selena_poster
    },
    {
        id: 2,
        title: 'Uncover (|A| Remix)',
        artist: 'Zara Larsson',
        path: zara_mp3,
        poster: zara_poster
    },
    ]
}

const reduceSongs = (state =  initialState , action) => {
  switch (action.type) {
    case 'GET_TASK':
      return {...state, Songs: action.payload }
    default:
      return state;
  }
}

export const store = createStore(reduceSongs);
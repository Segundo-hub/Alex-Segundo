import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'

export interface Song {
    id: number
    title: string
    artist: string
    path?: string
    poster?: string
    status?: 'played' | 'paused' | 'finished'
}

interface SongsState {
    songs: Song[]
    current: Song | null
}

const songsSlice = createSlice<SongsState, SliceCaseReducers<SongsState>>({
    name: 'music-slice',
    initialState: {
        songs: [
            {
                id: 1,
                title: 'Kill em With Kindness (|A| Remix)',
                artist: 'Selena Gomez',
                path: require('@assets/songs/selena_gomez.mp3').default,
                poster: require('@assets/images/posters/selena_poster.jpg').default,
            },
            {
                id: 2,
                title: 'Uncover (|A| Remix)',
                artist: 'Zara Larsson',
                path: require('@assets/songs/zara_larsson.mp3').default,
                poster: require('@assets/images/posters/zara_poster.jpg').default,
            },
            {
                id: 3,
                title: 'Apollo (|A| Remix)',
                artist: 'Timebelle',
                path: require('@assets/songs/timebelle.mp3').default,
                poster: require('@assets/images/posters/timebelle_poster.jpg').default,
            },
        ],
        current: null,
    },
    reducers: {
        selectSongById(state, { payload }: PayloadAction<number>) {
            state.current = state.songs.find(song => song.id === payload) as Song
        },
    },
})

export const { selectSongById } = songsSlice.actions

export default songsSlice.reducer

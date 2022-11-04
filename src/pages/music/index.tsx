import { ViewLayout } from '@layout/ViewLayout'
import { SEOComponent } from '@component/utils/SEOComponent'
import { useSelector, useDispatch } from 'react-redux'
import { selectSongById } from '@store/reducers/songReducer'
import { HeadFC, PageProps } from 'gatsby'
import { SimpleTitle } from '@component/molecules/SimpleTitle/SimpleTitle'

export default function MusicIndexPage(props: PageProps): JSX.Element {
    const songs = useSelector((state: ReduxStore) => state.songs.songs)
    const selected = useSelector((state: ReduxStore) => state.songs.current)
    const dispatch = useDispatch()

    const dispatchCurrentSong = (id: number) => {
        dispatch(selectSongById(id))
    }

    return (
        <ViewLayout>
            <SimpleTitle title='COMING SOON' />
            {/* <section style={{ '--poster-img': `url(${selected?.poster})` } as React.CSSProperties}>
                <ul style={{ color: 'white' }}>
                    {songs.map(e => (
                        <li key={e.id}>
                            <h6>{e.artist}</h6>
                            <button onClick={() => dispatchCurrentSong(e.id)}>SELECT</button>
                        </li>
                    ))}
                </ul>
                <div style={{ color: 'white' }}>
                    {selected && (
                        <div>
                            <audio src={selected.path} controls></audio>
                            <h4>{selected.artist}</h4>
                        </div>
                    )}
                </div>
            </section> */}
        </ViewLayout>
    )
}

export const Head: HeadFC = () => (
    <SEOComponent
        title='Alex Segundo | Music'
        description='Music Producer. Enjoy that energy that only EDM gives you. Lose yourself in their unique melodies, and their heart beat beats.'
        page='music'
    />
)

import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>SELECT A SONG</div>
    }
    return (
        <div>
            <h3>Song Detail :</h3>
            <p>
                Titulo: <b>{song.title}</b>
                <br />
            Duration: {song.duration}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
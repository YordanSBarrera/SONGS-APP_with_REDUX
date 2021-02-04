import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({song}) => {
    console.log(song)
    return (
        <div>
            Titulo: <b>{song.title}</b>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps) (SongDetail);
import React from 'react'
import SongList from './SongList'

const App = () => {
    return (
        <div>
            <SongList />
            <hr />
            <button className="ui primary button">
                Primary
                </button>
            <button className="ui secondary button">
                Secondary
                </button>
        </div>
    )
}

export default App;
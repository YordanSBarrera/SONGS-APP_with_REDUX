import React from 'react'
import SongList from './SongList'

const App = () => {
    return (
        <div>
            <SongList/>
            <hr/>
            <button class="ui primary button">
                Primary
                </button>
            <button class="ui secondary button">
                Secondary
                </button>
        </div>
    )
}

export default App;
import {combineReducers} from 'redux'

const songsReducer=()=>{
    return [
        {title:'Toxicity', duration: '3:04'},
        {title:'Macarena', duration: '4:45'},
        {title:'The Soya', duration: '2:15'},
        {title:'Isla Bella', duration: '4:19'}
    ]
}

const selectSongReducer=(selectedSong=null, action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectSongReducer
})
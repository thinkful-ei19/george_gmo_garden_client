import { API_BASE_URL } from '../config';
// export const fetchPlayerError = (res) => dispatch => {
//     if (!res.ok) {
//         throw Error(res.statusText);
//     }
//     return res;
// };

export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS'; 
export const fetchPlayerSuccess = players => ({ 
    type: FETCH_PLAYER_SUCCESS,
    players
});

export const fetchPlayers = () => dispatch => {
    console.log('Calling fetch queries');
    fetch(`${API_BASE_URL}/game/players`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(players => {
        console.log('DB is working!', players);
        dispatch(fetchPlayerSuccess(players));
    }).catch(err => {
        dispatch(console.log(err));
    });    
};

export const CHANGE_PLAYER_SCORE = 'CHANGE_PLAYER_SCORE'; 
export const changePlayerScore = (score, dispatch) => {console.log(score);
    dispatch({type:'CHANGE_PLAYER_SCORE', score})
    const userID = localStorage.getItem('userID');
    fetch(`${API_BASE_URL}/game/players/${userID}`, {
        method:'PUT',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({score}) 
    }).then(obj => dispatch({type: POST_PLAYER, payload:obj}))
};

export const GET_PLAYER_SCORE = 'GET_PLAYER_SCORE'; 
export const getPlayerScore = () => ({ 
    type: GET_PLAYER_SCORE
});

export const POST_PLAYER = 'POST_PLAYER'; 
export const postPlayer = (name, dispatch) => {console.log(name);
    fetch(`${API_BASE_URL}/game/players`, {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({name}) 
    }).then(res => res.json())
    .then(obj => { 
        dispatch({type: POST_PLAYER, payload:obj})
        localStorage.setItem('userID', obj.id)
    })
    // return {
    // type: POST_PLAYER,
    // name: 'bob'
};
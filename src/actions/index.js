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
export const changePlayerScore = score => ({ 
    type: CHANGE_PLAYER_SCORE,
    score
});

export const GET_PLAYER_SCORE = 'GET_PLAYER_SCORE'; 
export const getPlayerScore = () => ({ 
    type: GET_PLAYER_SCORE
});
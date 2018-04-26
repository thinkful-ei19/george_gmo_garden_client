import { API_BASE_URL } from '../config';

export const fetchPlayerError = (res) => dispatch => {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
};

export const fetchPlayersSuccess = (res) => dispatch => {
    if (res.ok) {
        console.log('Data OK to go!',res.ok);
        return res;
    }
};

export const fetchPlayers = () => dispatch => {
    fetch(`${API_BASE_URL}/game/players`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(player => {
        console.log('DB is working!', player);
        dispatch(fetchPlayersSuccess(player));
    }).catch(err => {
        dispatch(fetchPlayerError(err));
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
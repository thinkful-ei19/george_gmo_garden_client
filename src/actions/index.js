


// export const PLAYERS = 'PLAYERS';
// export const players = () => {
//     return {
//         type:'PLAYERS',
//         payload:[
//             {id:1,name:'George',totalscore:(100000000)}
//         ]
//     }
// };

export const fetchPlayers = () => dispatch => {
    fetch('${API_BASE_URL}/game/players').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(player => {
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
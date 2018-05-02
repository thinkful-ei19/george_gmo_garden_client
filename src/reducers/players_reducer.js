const initialState = {
    score:0
};

export default function playersReducer(state = initialState, action){

    switch(action.type){
        case 'GET_PLAYER_SCORE':
            return Object.assign({},state);
        case 'CHANGE_PLAYER_SCORE':
            return Object.assign({},state,{
                score: Number(action.score + state.score)
            });
        case 'FETCH_PLAYER_SUCCESS':
            return Object.assign({},state,{
                players: action.players
            });
        default:
            return state;
    }

}

// const data = {
//     type:'PLAYERS',
//     payload:[
//         {id:"1", name:"George", totalscore }
//     ]
// }

export default function(state = null, action){

    switch(action.type){
        case 'PLAYERS':
            return action.playload;
        default:
            return state;
    }

}
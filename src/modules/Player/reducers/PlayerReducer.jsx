// import {CREATE_NEW_PLAYER} from "../actions/PlayerActions";
//
// const initialState = {
//     hands: [],
//     initialBet: 0,
//     totalBet: 0,
//
// }
//
// export const playerReducer = (state = initialState, action) => {
//     switch (action.type){
//         case CREATE_NEW_PLAYER:
//             return{
//                 ...state,
//                 players: [
//                     ...state.players,
//                     action.payload
//                 ]
//             };
//         default:
//             return state;
//     }
// };
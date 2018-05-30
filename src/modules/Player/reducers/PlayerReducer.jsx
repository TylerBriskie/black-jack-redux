import {DEAL_CARD, DEAL_CARD_SUCCESS, NEW_PLAYER} from "../actions/PlayerActions";

const initialState = {
players: []
};

export default (state = initialState, {type, ...payload}) => {

    let { players } = state;
    switch (type){
        case NEW_PLAYER:
            if (payload.name === ''){
                alert("Player Name must not be blank")
                return state
            }

            console.log(players);
            let newPlayer = {
                id: players.length,
                name: payload.name,
                bankRoll: 500,
                hand: [],
            };
            players.push(newPlayer);
            return {
                ...state,
              players
            };


        case DEAL_CARD:
            console.log("DEALING CARD - payload: ", payload)
            return{
                ...state
            };
        case DEAL_CARD_SUCCESS:
            console.log("DEALING CARD - SUCCESS!! payload: ", payload);
            console.log(players);
            console.log("state", state);
            let currentPlayer = players[payload.playerTurn];
            console.log(currentPlayer)
            return {
                ...state,
                players,
            };
        default:
            return state;
    }
};
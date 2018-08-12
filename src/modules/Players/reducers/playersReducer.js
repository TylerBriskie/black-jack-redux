import { NEW_PLAYER, INCREASE_BET, DECREASE_BET, HIT } from "../actions/playersActions";
import { DEAL_CARD } from '../../Game/actions/gameActions';

const initialState = {
    players: [],
};

export default (state = initialState, { type, ...payload}) =>{
    if (type === NEW_PLAYER){
        const { players } = state;
        if (players.length >= 4){
            alert("Sorry, the table is full.");
            return state;
        }
        let newPlayer = {
            id: Date.now(),
            name: payload.name,
            bankRoll: 450,
            hands: [],
            initialWager: 50,
        };
        players.push(newPlayer);
        return {
            ...state,
            players
        }
    }

    if (type === DEAL_CARD){
        console.log('CARD DEALT', payload);
        if (payload.playerId === 'dealer'){
            return state;
        }
        const {players} = state;
        const player = players.find(player => player.id === payload.playerId);
        if (player.hands.length === 0){
            console.log('no hands found');
            player.hands[0]={
                cards: [payload.card],
            };
        } else {
            player.hands[payload.currentHand].cards.push(payload.card);
        }
        return {
            ...state,
        }
    }

    if (type === INCREASE_BET){
        const { players } = state;
        return {
            ...state,
            players: players.map(player => {
                if (player.id === payload.id && player.bankRoll >= 25){
                    player.bankRoll = player.bankRoll - 25;
                    player.initialWager = player.initialWager + 25;
                }
                return player;
            })
        }
    }

    if (type === DECREASE_BET){
        const { players } = state;
        return {
            ...state,
            players: players.map(player => {
                if (player.id === payload.id && player.initialWager > 0){
                    player.bankRoll = player.bankRoll + 25;
                    player.initialWager = player.initialWager - 25;
                }
                return player;
            })
        }
    }

    return {...state};
}
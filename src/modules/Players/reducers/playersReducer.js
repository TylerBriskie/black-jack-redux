import { NEW_PLAYER, INCREASE_BET, DECREASE_BET, HIT, BUST} from "../actions/playersActions";
import { DEAL_CARD } from '../../Game/actions/gameActions';
import {getHardValue, getSoftValue} from "../../Game/helpers/gameLogic";

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
        console.log(players);
        console.log(payload)
        const player = players.find(player => player.id === payload.playerId);
        if (player.hands.length === 0){
            console.log('no hands found');
            player.hands[0]={
                cards: [payload.card],
            };
        } else {
            const hand = player.hands[payload.currentHand];

            hand.cards.push(payload.card);
            hand.softValue = getSoftValue(hand);
            hand.hardValue = getHardValue(hand);
            if (hand.hardValue === "BUST"){
                hand.isBusted = true;
            }
        }
        return {
            ...state,
        }
    }

    if (type === BUST){
        console.log('player busts', payload);
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
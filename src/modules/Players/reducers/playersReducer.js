import { NEW_PLAYER, INCREASE_BET, DECREASE_BET, HIT, BUST} from "../actions/playersActions";
import { NEW_HAND, DEAL_CARD, PAYOUT_WINNERS } from '../../Game/actions/gameActions';
import { getValues } from "../../Game/helpers/gameLogic";

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
            handsPlayed: 0,
            wins: 0,
            losses: 0,
            pushes: 0,
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
        if (payload.playerId === 'DEALER'){
            return state;
        }
        const {players} = state;
        const currentPlayer = players.find(player => player.id === payload.playerId);
        console.log(currentPlayer);
        const playerIndex = players.indexOf(currentPlayer);
        if (currentPlayer.hands.length === 0){
            currentPlayer.hands[0]={
                cards: [payload.card],
                wager: currentPlayer.initialWager,
            };
        } else {
            const hand = currentPlayer.hands[payload.currentHand];
            hand.cards.push(payload.card);
            const values = getValues(hand);
            hand.score = values.score;
            hand.softValue = values.soft;
            hand.hardValue = values.hard;
            hand.isBusted = values.busted;
            hand.isBlackjack = values.isBlackjack;
            console.log(hand);
            if (hand.cards.length === 2 && hand.cards[0].value === hand.cards[1].value){
                hand.isSplittable = true;
            }
        }
        // const newPlayers = players.map((player, index) => {
        //     if (index !== playerIndex){
        //         return player;
        //     }
        //     return currentPlayer;
        // });
        return {
            ...state,
            players,
        }
    }

    if (type === BUST){
        const {players} = state;
        const player = players.find(player => player.id === payload.playerId);
        const hand = player.hands[payload.currentHand];
        hand.cards.push(payload.card);
        hand.score = 'BUST';
        // hand.softValue = 'BUST';
        // hand.hardValue = 'BUST';
        hand.isBusted = 'BUST';
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

    if (type === PAYOUT_WINNERS){
        const { players } = state;
        return {
            ...state,
            players: players.map(player => {
                if (player.id === payload.playerId){
                    player.handsPlayed += 1;
                    if(payload.hands[0].handWins){
                        player.bankRoll += payload.hands[0].wager;
                        player.wins += 1;
                    } else if (!payload.hands[0].handPushes && !payload.hands[0].handWins){
                        console.log("LOSE")
                        player.bankRoll -= payload.hands[0].wager;
                        player.losses += 1;
                    } else {
                        player.pushes += 1;
                    }
                }
                return player;
            })
        }
    }

    if (type ===NEW_HAND){
        const {players} = state;
        return {
            ...state,
            players: players.map(player => {
                player.hands=[];
                return player
            })
        }
    }

    return {...state};
}
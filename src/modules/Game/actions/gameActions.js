export const NEW_PLAYER = 'NEW_PLAYER';
export const NEW_GAME = 'NEW_GAME';
export const HIT = 'HIT';
export const STAY = 'STAY';
export const DOUBLE_DOWN = 'DOUBLE_DOWN';
export const SPLIT = 'SPLIT';

export const newPlayerAction = (name) => {
        console.log(name);
        return {type: NEW_PLAYER, name}
};

export const newGameAction = () => {
        console.log("NEW GAME- - ACTION!!!")
        return {type: NEW_GAME}
};
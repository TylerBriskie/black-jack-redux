export const NEW_PLAYER = 'NEW_PLAYER';
export const DEAL_CARDS = 'DEAL_CARDS';
export const HIT = 'HIT';
export const STAY = 'STAY';
export const DOUBLE_DOWN = 'DOUBLE_DOWN';
export const SPLIT = 'SPLIT';

export const newPlayerAction = (player) => ({type: NEW_PLAYER, player});

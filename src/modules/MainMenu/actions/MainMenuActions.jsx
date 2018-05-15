export const ADD_NEW_PLAYER = "ADD_NEW_PLAYER";
export const BEGIN_GAME = "BEGIN_GAME";


export const addNewPlayerAction = playerName => ({type: ADD_NEW_PLAYER, playerName });
export const beginGameAction = () => ({type: BEGIN_GAME});
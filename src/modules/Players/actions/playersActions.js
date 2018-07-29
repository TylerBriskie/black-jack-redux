export const NEW_PLAYER = 'NEW_PLAYER';

export const newPlayerAction = (name) => {
    return {type: NEW_PLAYER, name}
};

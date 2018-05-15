import ADD_NEW_PLAYER from '../actions/MainMenuActions';

const initState = {
    players: [],
    newPlayerName: '',
};

export default (state = initState, {type, ...payload }) => {
    if (type === ADD_NEW_PLAYER) {
        const newPlayerName = payload;
        console.log("state: ", state);
        console.log("payload: ", payload);
        return {
            ...state,
            newPlayerName
        }
    }

    return state;
}
import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import { fetchCardsAction, dealACardAction} from '../Game/actions/gameActions';
import { newPlayerAction } from '../Player/actions/PlayerActions';

export const mapStateToProps = (state) =>{
    console.log(state);
    return {
        deckId: state.game.deck.id
    };

} ;

export const mapDispatchToProps = dispatch => ({
    newPlayerAction: playerName => dispatch(newPlayerAction(playerName)),
    newGameAction: () => dispatch(fetchCardsAction()),
    dealACardAction: (deckId) => dispatch(dealACardAction(deckId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
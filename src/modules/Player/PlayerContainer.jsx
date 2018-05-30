import { connect } from 'react-redux';
import { dealCardAction } from "./actions/PlayerActions";
import Player from './Player'

const mapStateToProps = (state) => {
    console.log("PLAYER STATE", state);
    return {
        deckId: state.game.deck.id,
        playerTurn: state.game.playerTurn,
    }
};

const mapDispatchToProps = dispatch => ({
    dealCard: (deckId, playerId) => dispatch(dealCardAction(deckId, playerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
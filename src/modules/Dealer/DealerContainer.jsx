import { connect } from 'react-redux';
import { dealerHitAction, dealerStayAction,
} from "../Game/actions/gameActions";
import Dealer from './Dealer'

export const mapStateToProps = state => {
    return {
        dealerTurn: state.game.playerTurn === 'DEALER',
        cards: state.game.dealer.hand.cards,
        hasBlackjack: state.game.dealer.hasBlackjack,
        softValue: state.game.dealer.hand.softValue,
        hardValue: state.game.dealer.hand.hardValue,
        busted: state.game.dealer.hand.isBusted,
    }
};

export const mapDispatchToProps = dispatch => ({
    dealerHit: () => dispatch(dealerHitAction()),
    dealerStay: () => dispatch(dealerStayAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dealer);
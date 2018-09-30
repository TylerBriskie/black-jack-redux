import { connect } from 'react-redux';
import { dealerHitAction, dealerStayAction, dealerBustAction, calculateWinnersAction
} from "../Game/actions/gameActions";
import Dealer from './Dealer'

export const mapStateToProps = state => {
    return {
        dealerTurn: state.game.playerTurn === 'DEALER',
        cards: state.game.dealer.hand.cards,
        hasBlackjack: state.game.dealer.hasBlackjack,
        softValue: state.game.dealer.hand.softValue,
        hardValue: state.game.dealer.hand.hardValue,
        score: state.game.dealer.hand.score,
        busted: state.game.dealer.hand.isBusted,
    }
};

export const mapDispatchToProps = dispatch => ({
    dealerHit: () => dispatch(dealerHitAction()),
    dealerStay: score => dispatch(calculateWinnersAction(score)),
    dealerBusts: () => dispatch(calculateWinnersAction("BUST")),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dealer);
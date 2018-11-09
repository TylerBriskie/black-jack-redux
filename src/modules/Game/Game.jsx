import React, { Component } from 'react';
import PlayersContainer from '../Players/PlayersContainer';
import MainMenuContainer from '../MainMenu/MainMenuContainer';
import Header from '../Header/Header';
import PauseButton from '../PauseButton/PauseButton';
import PauseMenu from '../PauseMenu/PauseMenu';
import PayoutModal from '../PayoutModal/PayoutModal';
import DealerContainer from '../Dealer/DealerContainer';
import './Game.css'

class Game extends Component {
    constructor(props){
        super(props);
        console.log(props);
    };

    render() {
        const pauseGame = () => {
            this.props.pauseGame();
        };

        return (
            <div className="game-container">
                <div className="row">
                    <Header
                        title="React - Jack"
                        subtitle="Redux"
                    />
                    {this.props.gameInProgress ?
                        <DealerContainer id="dealer-container"
                                     cards={this.props.dealer.hand.cards}
                                     soft={this.props.dealer.hand.softValue}
                                     hard={this.props.dealer.hand.hardValue}
                        />
                    : null }
                </div>
                {this.props.payingOutWinners ? (
                    <PayoutModal dealer={this.props.dealer} players={this.props.players} playAgain={this.props.newHand}/>
                ) : null}
                {
                    this.props.placeYourBets ? <h1 id="place-your-bets">Place Your Bets</h1>: null
                }
                <PlayersContainer playerTurn = {this.props.playerTurn} />
                {
                    this.props.gameInProgress ?
                        this.props.placeYourBets ?
                            <MainMenuContainer />
                            :
                            this.props.gamePaused ?
                                <PauseMenu resumeGame = {pauseGame} playerCount={this.props.playerCount} />
                                :
                                <PauseButton pauseGame = {pauseGame}/>
                        :
                    <MainMenuContainer />
                }
            </div>
        );
    }
}

export default Game;
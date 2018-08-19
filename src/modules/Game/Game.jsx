import React, { Component } from 'react';
import PlayersContainer from '../Players/PlayersContainer';
import MainMenuContainer from '../MainMenu/MainMenuContainer';
import PauseButton from '../PauseButton/PauseButton';
import PauseMenu from '../PauseMenu/PauseMenu';
import DealerContainer from '../Dealer/DealerContainer';
import './Game.css'

class Game extends Component {
    constructor(props){
        super(props);
    };

    componentDidMount(){
        if (this.props.playerTurn === "DEALER" && this.props.dealer.hand.softValue < 17){
            console.log('dealer turn, hitting');
            console.log(this.props.dealer);
            this.props.dealerHit();
        } else if (this.props.playerTurn === 'DEALER') {
            console.log('dealer STAYS');
            this.props.dealerStay();
        }
    }

    render() {
        const pauseGame = () => {
            this.props.pauseGame();
        };
        const dealerHit = () => {
            this.props.dealerHit();
        };
        const dealerStay = () => {
            this.props.dealerStay();
        };
        const gameOver = () => {
            // this.props.gameOver();
            console.log('game over');
        };

        return (
            <div className="game-container">
                <DealerContainer cards={this.props.dealer.hand.cards} soft={this.props.dealer.hand.softValue} hard={this.props.dealer.hand.hardValue}/>
                <PlayersContainer playerTurn ={this.props.playerTurn} />
                {
                    this.props.gameInProgress ?
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
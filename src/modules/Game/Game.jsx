import React, { Component } from 'react';
import PlayersContainer from '../Players/PlayersContainer';
import MainMenuContainer from '../MainMenu/MainMenuContainer';
import PauseButton from '../PauseButton/PauseButton';
import PauseMenu from '../PauseMenu/PauseMenu';
import Dealer from '../Dealer/Dealer';
import './Game.css'

class Game extends Component {
    constructor(props){
        super(props);
    };

    render() {
        const pauseGame = () => {
            this.props.pauseGame();
        };
        console.log(this.props.playerTurn);
        return (
            <div className="game-container">
                <Dealer cards={this.props.dealer.hand.cards} soft={this.props.dealer.hand.softValue} hard={this.props.dealer.hand.hardValue}/>
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
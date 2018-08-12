import React, { Component } from 'react';
import PlayersContainer from '../Players/PlayersContainer';
import MainMenuContainer from '../MainMenu/MainMenuContainer';
import PauseButton from '../PauseButton/PauseButton';
import PauseMenu from '../PauseMenu/PauseMenu';

import './Game.css'
// import Dealer from '../Dealer/Dealer';

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
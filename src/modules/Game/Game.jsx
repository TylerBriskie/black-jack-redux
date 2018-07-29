import React, { Component } from 'react';
import PlayersContainer from '../Players/PlayersContainer';
import MainMenuContainer from '../MainMenu/MainMenuContainer';
import './Game.css'
// import Dealer from '../Dealer/Dealer';

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayMenu: false,
        }
    };

    render() {

        return (
            <div className="game-container">
                <div className="dealer-container">
                </div>
                {this.state.displayMenu ? <h4>TRUE</h4> : <h4>FALSE</h4>}
                <PlayersContainer />
                <MainMenuContainer />
            </div>
        );
    }
}

export default Game;
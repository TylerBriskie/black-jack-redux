import React, { Component } from 'react';
import PlayersContainer from '../Players/PlayersContainer';
import MainMenuContainer from '../MainMenu/MainMenuContainer';
import './Game.css'
// import Dealer from '../Dealer/Dealer';

class Game extends Component {
    constructor(props){
        super(props);
    };

    render() {
        console.log(this.props.deck);
        return (
            <div className="game-container">
                <PlayersContainer />
                <MainMenuContainer />
            </div>
        );
    }
}

export default Game;
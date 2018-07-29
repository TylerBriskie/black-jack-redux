import React, { Component } from 'react';
import PlayersContainer from '../Players/PlayersContainer';
import MainMenuContainer from '../MainMenu/MainMenuContainer';

// import Dealer from '../Dealer/Dealer';

class Game extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <div className="game-container">
                <div className="dealer-container">
                </div>
                <PlayersContainer />
                <MainMenuContainer />
            </div>
        );
    }
}

export default Game;
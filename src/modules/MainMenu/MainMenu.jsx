import React, { Component } from 'react';
import "./MainMenu.css";

class MainMenu extends Component {

    constructor(props){
        super(props)
        this.state = {
            playerName: '',
        };
        this.addNewPlayer = this.addNewPlayer.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.startGame = this.startGame.bind(this);
        this.dealACard = this.dealACard.bind(this);
    }

    addNewPlayer(e) {
        e.preventDefault();
        this.props.newPlayerAction(this.state.playerName);
        this.setState({
            playerName: ''
        });
    };

    handleChange(event){
        this.setState({playerName: event.target.value});
    }

    startGame(e){
        e.preventDefault();
        console.log('state', this.state);
        console.log('props', this.props);
        this.props.newGameAction();
    }
    dealACard(e){
        let deckId = this.props.deckId;
        console.log("deckId: ", deckId);

        this.props.dealACardAction(deckId);
    }

    render() {
        return (
            <div className="main-menu">
                <h1>Main Menu</h1>
                <form onSubmit={this.addNewPlayer}>
                    <input type="text" value={this.state.playerName} onChange={this.handleChange}
                           placeholder="Enter Player Name"/>
                    <input className="btn add-player-button" type="submit" value="Add New Player"></input>
                </form>
                <button className="btn new-game-button" onClick={this.startGame}>START GAME</button>
                <button className="btn new-game-button" onClick={this.dealACard}>DEAL A CARD</button>
            </div>
        )
    }
}

export default MainMenu;
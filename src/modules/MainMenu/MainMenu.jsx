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
    }

    addNewPlayer(e) {
        e.preventDefault();
        if (this.state.playerName === ''){
            alert('Player name cannot be blank')
            return;
        }
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
        this.props.newGameAction(this.props.players, 6);
    }

    render() {
        return (
            <div className="main-menu">
                <h1>Main Menu</h1>
                {this.props.players.length < 4 ?
                    <form onSubmit={this.addNewPlayer}>

                        <input type="text" value={this.state.playerName} onChange={this.handleChange}
                               placeholder="Enter Player Name"/>
                        <input className="btn add-player-button" type="submit" value="Add New Player"></input>
                    </form> :
                    <h1>Table Full!</h1>
                }
                <button className="btn new-game-button" onClick={this.startGame}>
                    START GAME
                </button>
            </div>
        )
    }
}

export default MainMenu;
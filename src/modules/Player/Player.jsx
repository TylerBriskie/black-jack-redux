import React from 'react';
import './Player.css';

class Player extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            wager: 25,
        };
        this.dealCard = this.dealCard.bind(this);
    }

    dealCard(){
        console.log("player props:", this.props);
        this.props.dealCard(this.props.deckId, this.props.id);
    }

    render (){

        console.log("PLAYER PROPS", this.props)
        return (
            <div className="player-object">
                <h3>{this.props.name}</h3>
                <p>{this.props.hand}</p>
                <button className="btn" onClick={this.dealCard}>Hit Me!</button>
            </div>
        )
    }


}

export default Player;


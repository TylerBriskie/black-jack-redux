import React from 'react';
import './Player.css';

class Player extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            playerName: '',
            bankRoll: '',
            hands: [],
        }
    }

    render (){
        return (
            <div className="player-object">
                <h3>Player</h3>

            </div>
        )
    }


}

export default Player;


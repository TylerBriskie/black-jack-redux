import React from 'react';
import './Player.css';

class Player extends React.Component {

    constructor(props){
        super(props)

    }

    render (){
        console.log("PLAYER PROPS", this.props)
        return (
            <div className="player-object">
                <h3>{this.props.name}</h3>

            </div>
        )
    }


}

export default Player;


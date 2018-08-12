import React from 'react';
import "./PauseMenu.css";

const PauseMenu = (props) => {
    console.log(props);
    return (
        <div className="pause-backdrop">
            <div className = "pause-menu">
                <h1>GAME PAUSED</h1>
                <div className="stats">
                    <div className = "game-stats">

                        <h3>Deck Count: 6</h3>
                        <h3>Cards Remaining: ?</h3>
                        <h3>Hands Played: ?</h3>

                    </div>
                    <div className = "player-stats">
                        <h3>Players: {props.playerCount}</h3>
                    </div>
                </div>

                <button className="btn resume-button" onClick={props.resumeGame}>
                    RESUME GAME
                </button>
            </div>
        </div>

    )

};

export default PauseMenu;
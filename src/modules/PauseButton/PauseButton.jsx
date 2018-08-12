import React from 'react';
import "./PauseButton.css";

const PauseButton = (props) => {
        return (
            <div>
                <button className="btn pause-button" onClick={props.pauseGame}>
                    PAUSE GAME
                </button>
            </div>
        )

};

export default PauseButton;
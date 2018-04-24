import React from 'react';
import './game.css';


const ScoreBoard = (props) => {
    console.log(props)
    return (
        <div className="score">Points: {props.points}</div>
    );

}

export default ScoreBoard;
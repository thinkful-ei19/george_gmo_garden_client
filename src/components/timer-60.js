import React from 'react';
import './game.css';
import { Redirect } from 'react-router-dom';


class Timer60 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: 0,
            intervalID: ''
        }
        this.startTimer = this.startTimer.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter(){
        let counter = this.state.timer;
        if (counter === 60) {
            clearInterval(this.state.intervalID);
            window.location.replace("/game-over");
            // <Redirect to="/game-over" /> Work on this later!
        } else {
            this.setState({
                timer: counter+1
            })
        }
    }

    startTimer(){
        const intervalID = setInterval(this.incrementCounter, 1000);
        this.setState({
            intervalID: intervalID
        });
    }
    
    render() {
        return (
            <div>
                <button onClick={this.startTimer}>START GAME</button>
                <p>Timer <b>{this.state.timer}</b> seconds</p>
            </div>
        );
    }
}

export default Timer60;
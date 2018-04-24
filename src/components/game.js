import React from 'react';
import './game.css';

// Component
import ScoreBoard from './score-board'

class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            points: 0
        }
    }
    
    scoreUpdate(event){
        this.setState({points:event.target.value})
    }

    render() {
        return (
            <div>
                <div className="container">
                    <ScoreBoard points={this.state.points}/>
                    <div className="weeds" id="weed1" value="1" onClick={()=>console.log('weed1 is Working')}></div>
                    <div className="weeds" id="weed2" value="1" onClick={()=>console.log('Weed2 is Working')}></div>
                    <div className="weeds" id="weed3" value="1" onClick={()=>console.log('Weed3 is Working')}></div>
                </div>
            </div>   
        );
    }

}

export default Game;
import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

import './game.css';

// Component
import ScoreBoard from './score-board'

class Game extends React.Component {
    componentWillMount(){
        this.props.players()
    }
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         points: 0
    //     }
    // }
    
    scoreUpdate(num){
        this.setState({points:Number(this.state.points) + num})
        console.log(this.state.points);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <ScoreBoard points={this.state.points}/>
                    <div className="weeds" id="weed1" onClick={()=>this.scoreUpdate(4)}></div>
                    <div className="weeds" id="weed2" onClick={()=>this.scoreUpdate(10)}></div>
                    <div className="weeds" id="weed3" onClick={()=>this.scoreUpdate(2)}></div>
                </div>
            </div>   
        );
    }

}

function mapStateToProps(state){
    console.log(state);
    return {
        players:state.players
    }
}

export default connect(mapStateToProps, actions)(Game);
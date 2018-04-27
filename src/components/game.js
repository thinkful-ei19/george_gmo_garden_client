import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './game.css';

// Component
import ScoreBoard from './score-board';

class Game extends React.Component {
    // componentWillMount(){
    //     this.props.players()
    // }
    /*
    constructor(props){
        super(props);

        // this.state = {
        //     points: 0
        // }
    }
    */

    componentDidMount(){
        this.props.dispatch(actions.getPlayerScore());
        console.log('componentDidMount', this.props );
    }

    componentDidUpdate(){
        console.log(this.props);
    }

    scoreUpdate(num){
        this.props.dispatch(actions.changePlayerScore(num));
        console.log(this.props);
    }
    /* 
    scoreUpdate(num){
        this.setState({points:Number(this.state.points) + num})
        console.log(this.state.points);
    }
    */

    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={()=>this.props.dispatch(actions.fetchPlayers())}>test button</button>
                <div className="container">
                    <ScoreBoard score={this.props.score}/>
                    <div className="weeds" id="weed1" onClick={()=>this.scoreUpdate(4)}></div>
                    <div className="weeds" id="weed2" onClick={()=>this.scoreUpdate(10)}></div>
                    <div className="weeds" id="weed3" onClick={()=>this.scoreUpdate(2)}></div>
                </div>
            </div>   
        );
    }

}

const mapStateToProps = (state) => ({
    score: state.players.score,
    players: state.players
})

export default connect(mapStateToProps)(Game);
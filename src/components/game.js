import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './game.css';
import '../animation.css';

/* ====== Import Component ====== */

import ScoreBoard from './score-board';
import Timer30 from './timer-30s.js';

/* ====== Game Component  ====== */

class Game extends React.Component {
    // componentWillMount(){
    //     this.props.players()
    // }
    
    constructor(props){
        super(props);

        this.state = {
            isSlidingUp1:[false,false,false] 
        };
    }
    

    componentDidMount(){
        this.props.dispatch(actions.getPlayerScore());
        console.log('componentDidMount', this.props );
        this.setState({isSlidingUp: true})
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
        let classes;
        if (this.state.isSlidingUp) {
            classes = "weeds slideUp";
        }
        else {
            classes = "weeds";
        }
        // let classes1;



        return (
            <div>
                <ScoreBoard score={this.props.score}/>
                <Timer30 />
                {/* <button onClick={()=>this.props.dispatch(actions.fetchPlayers())}>test button</button> */}
                <div className="container">
                    <div className="holes hole1">
                        <div className={classes} id="weed1" onClick={()=> {this.scoreUpdate(4)
                                                                            this.setState({isSlidingUp: !this.state.isSlidingUp})}}></div>
                    </div>
                    <div className="holes hole2">
                        <div className={classes} id="weed2" onClick={()=> {this.scoreUpdate(10)
                                                                            this.setState({isSlidingUp: !this.state.isSlidingUp})}}></div>
                    </div>
                    <div className="holes hole3">
                        <div className={classes} id="weed3" onClick={()=> {this.scoreUpdate(2)
                                                                            this.setState({isSlidingUp: !this.state.isSlidingUp})}}></div>
                    </div>
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
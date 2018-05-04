import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './game.css';
import '../animation.css';

/* ====== Import Component ====== */

import ScoreBoard from './score-board';
import Timer60 from './timer-60.js';

/* ====== Game Component  ====== */

class Game extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            weeds:[],
        };
    }
    

    componentDidMount(){
        this.props.dispatch(actions.getPlayerScore());
        console.log('componentDidMount', this.props );
        this.setState({isSlidingUp: true});
        this.lister();
        setInterval(() => this.lister(), 2000)      
    }

    componentDidUpdate(){
        console.log(this.props);
    }

    scoreUpdate(num){
        this.props.dispatch(actions.changePlayerScore(num));
        console.log(this.props);
    }
    
    score(){
        this.lister();
        this.scoreUpdate(4);
    }
    

    lister() {
    const weeds = [];
    const random = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < 3; i++) {
        // eslint-disable-next-line
        if (i == random - 1) {
        weeds.push(<div key={i} className="weeds bounceIn" onClick={()=>this.score()} />)
        } else {
        weeds.push(<div key={i} className= "weeds bounceOut" />)
        }
    }
    this.setState({weeds});
    }
    
    render() {
        return (
            <div>
                <ScoreBoard score={this.props.score}/>
                <Timer60 />
                {this.props.name}
                {/* <button onClick={()=>this.props.dispatch(actions.fetchPlayers())}>test button</button> */}
                <div className="container">
                    {this.state.weeds}
                    {/* <div className="holes hole1">
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
                    </div> */}
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
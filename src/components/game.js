import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Login from './login-dialog';


import './game.css';
import '../animation.css';

/* ====== Import Component ====== */

import ScoreBoard from './score-board';
import Timer60 from './timer-60.js';

/* ====== Game Component  ====== */

class Game extends React.Component {
    // componentWillMount(){
    //     this.props.players()
    // }
    
    constructor(props){
        super(props);

        this.state = {
            weeds:[] 
        };
    }
    

    componentDidMount(){
        this.props.dispatch(actions.getPlayerScore());
        console.log('componentDidMount', this.props );
        this.setState({isSlidingUp: true});
        setInterval(this.lister(), 3000);
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
    }

    lister() {
    const divie = <div className= "weeds bounceOut" />;
    const divClick = <div className="weeds bounceIn" onClick={()=>this.score()} />
    const weeds = [];
    const random = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < 3; i++) {
        // eslint-disable-next-line
        if (i == random - 1) {
        weeds.push(divClick)
        } else {
        weeds.push(divie)
        }
    }
    this.setState({weeds});
    }
    
    render() {
       

        // let classes;
        // if (this.state.isSlidingUp) {
        //     classes = "weeds bounceIn";
        // }
        // else {
        //     classes = "weeds bounceOut";
        // }
        // let classes2;


        return (
            <div>
                <Login />
                <ScoreBoard score={this.props.score}/>
                <Timer60 />
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
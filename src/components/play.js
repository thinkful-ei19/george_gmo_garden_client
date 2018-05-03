import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import * as actions from '../actions';

import './game.css';
import '../animation.css';

/* ====== Import Component ====== */

import Login from './login-dialog';
import Game from './game';
import GameOver from './game-over';
import Leaderboard from './leaderboard';

class Play extends React.Component {
    render() {
        return (
            <Router >
                <div>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/game" component={Game} />
                    <Route exact path="/game-over" component={GameOver} />
                    <Route exact path="/leaderboard" component={Leaderboard} />
                </div>
            </Router >
        )
    }
}
const mapStateToProps = (state) => ({
    score: state.players.score,
    players: state.players
})

export default connect(mapStateToProps) (Play);
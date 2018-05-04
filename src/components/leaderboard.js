import React from 'react';
import './leaderboard.css';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LeaderTitle extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            weeds:[],
        };
    }
    
    componentDidMount(){
        this.props.dispatch(actions.getPlayerScore());
            console.log('componentDidMount', this.props );
    }

    render() {
        return (
            <div>
            <h1>Title of Game</h1>
            <h2>Subtitle of Leaderboard</h2>
            </div>
        );
    }
}

class Ranking extends React.Component {
    render() {
        return (
            <div className="divTable">
            <div className="divTableBody">
            <div className="divTableRow">
            <div className="divTableCell">NAME</div>
            <div className="divTableCell">DATE</div>
            <div className="divTableCell">SCORE</div>
            <div className="divTableCell">RANK</div>
            </div>
            <div className="divTableRow">
            <div className="divTableCell">George Colon</div>
            <div className="divTableCell">04/24/2018</div>
            <div className="divTableCell">100,000,000</div>
            <div className="divTableCell">1</div>
            </div>
            </div>
            </div>
        );
    }
}

class Leaderboard extends React.Component {
    render() {
        return (
            <div>
                <LeaderTitle />
                <Ranking />
            </div>
        );
    }
}   

// export default Leaderboard;
const mapStateToProps = (state) => ({
    score: state.players.score,
    players: state.players
})

export default connect(mapStateToProps)(Leaderboard);
import React from 'react';
import './leaderboard.css';

class LeaderTitle extends React.Component {
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
            <div class="divTable">
            <div class="divTableBody">
            <div class="divTableRow">
            <div class="divTableCell">NAME</div>
            <div class="divTableCell">DATE</div>
            <div class="divTableCell">SCORE</div>
            <div class="divTableCell">RANK</div>
            </div>
            <div class="divTableRow">
            <div class="divTableCell">George Colon</div>
            <div class="divTableCell">04/24/2018</div>
            <div class="divTableCell">100,000,000</div>
            <div class="divTableCell">1</div>
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

export default Leaderboard;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game';
// import Leaderboard from './components/leaderboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import './game.css';


class Timer3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            elapsed: 3
        }
    }
    componentDidMount(){
        // this.props.timer = setInterval(this.tick, 3000)
        setTimeout(() => {
            this.setState({ elapsed: 0 });
          }, 30000)
        setTimeout(() => {
            this.setState({ elapsed: 1 });
          }, 2000)
        setTimeout(() => {
            this.setState({ elapsed: 2 });
          }, 1000)

    };
    
    render() {
        return (
            <p>Timer <b>{this.state.elapsed}</b> seconds</p>
        );
    }
}

export default Timer3;
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';



export default class GameOver extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  

  render() {
    const inputStyle = {
      display: 'inline-block',
      width: '100%',
      padding: '1%'
    };
    const { open } = this.state;
    const Content = (
      <div>
      <h1>See if you made it to the leader board!</h1>
      <Link to="/leaderboard"><button style={inputStyle} type="submit">Game Over</button></Link>
      </div>
    );
    return (
      <div className="example">
        
        <button className="btn btn-action" onClick={this.onOpenModal}>
          End Game
        </button>{' '}
        
        This is modal to set game over.
       
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>All Done!</h2>
          {Content}
        </Modal>
      </div>
    );
  }
}
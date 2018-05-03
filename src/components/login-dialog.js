import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';



export default class Login extends React.Component {
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
      <label for="pname"><strong>Player Name</strong></label>
      <input style={inputStyle} type="text" placeholder="Enter Player Name" name="pname" required />
  
      <label style={inputStyle} for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
          <br/>
      <button style={inputStyle} type="submit">Start Game</button>
      </div>
    );
    return (
      <div className="example">
        <Link to="/">
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Start Game
        </button>
        </Link>{' '}
        
        This is modal to login and start game.
       
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Welcome to Whack a Weeds</h2>
          {Content}
        </Modal>
      </div>
    );
  }
}
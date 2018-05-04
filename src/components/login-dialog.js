import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import * as actions from '../actions';

export class Login extends React.Component {
  constructor() {
    super();
      this.state = {
      open: false,
    }
    this.saveName = this.saveName.bind(this)
  } 
  

  componentDidMount(){
    // this.props.dispatch(actions.postPlayer());
  };



  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  saveName = (e) => {
    e.preventDefault()
    actions.postPlayer(document.getElementById('pname').value, this.props.dispatch)
    localStorage.setItem('name', document.getElementById('pname').value)
    window.location = '/game'
  }


  render() {
    const inputStyle = {
      display: 'inline-block',
      width: '100%',
      padding: '1%'
    };
    const { open } = this.state;
    const Content = (
      <div>
        <form onSubmit={(event)=> this.saveName(event)}>
      <label htmlFor="pname"><strong>Player Name</strong></label>
      <input id={'pname'} style={inputStyle} type="text" placeholder="Enter Player Name" name="pname" required />
          <br/>
             
        <button style={inputStyle} type="submit">Start Game</button>
      </form>
      </div>
    );
    return (
      <div className="example">
        
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Start Game
        </button>{' '}
        
        This is modal to login and start game.
       
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Welcome to Whack a Weeds</h2>
          {Content}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state,compState) => ({

})

export default connect (mapStateToProps)(Login);
import React, { Component } from 'react';
import "./App.css"
import { withData } from './DataProvider';

class App extends Component {

  componentDidMount(){
    this.props.getActivity()
  }

  render() {
    const styles={
      button:{
        display: "block",
        margin: "auto",
        padding: 10,
        backgroundColor: '#ffffff00',
        borderRadius: 5,
        fontSize: 20,
        color: "black",
        border: 'solid black 2px'
      }
    }
    return (
      <div>
        <h1 style={{color: "black", textAlign:'center', fontSize: "3em", fontFamily: 'cursive', textDecoration: "underline", textDecorationColor: "gold"}}>Bored No More!</h1>
        <h1 style={{color: "black", textAlign:'center', fontFamily: 'cursive'}}>Find something to do!</h1>
        <button style={styles.button} onClick={() => this.props.getActivity()}>Something else</button>
        <div style={{backgroundImage:"url()"}}>
          <h1 style={{color: 'gold', textAlign:'center', backgroundColor: '#0000005e'}}>{this.props.activity}.</h1>
        </div>
      </div>
    );
  }
}

export default withData(App);
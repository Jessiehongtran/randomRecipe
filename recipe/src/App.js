import React from 'react';
import './App.css';
import Randomize from './components/randomize';
import {veggies, proteins, carbs, spices} from './data/ingredients';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        veggieInd: "",
        proteinInd: "",
        carbInd: "",
        spiceInd: ""
    }

}

 

  getIndx() {
  
  const veggieInd = Math.floor(Math.random()*(veggies.length))
  const proteinInd = Math.floor(Math.random()*(proteins.length))
  const carbInd = Math.floor(Math.random()*(carbs.length))
  const spiceInd = Math.floor(Math.random()*(spices.length))
  this.setState({
    veggieInd: veggieInd,
    proteinInd: proteinInd,
    carbInd: carbInd,
    spiceInd: spiceInd
  })
  }

  render(){

  
  return (
    <div className="App">
      <button onClick={() => this.getIndx()}>Get random ingredients</button>
      {this.state.veggieInd ? 
      <div className="ingredients">
        <img src={veggies[this.state.veggieInd].imageUrl}/>
        <img src={proteins[this.state.proteinInd].imageUrl}/>
        <img src={carbs[this.state.carbInd].imageUrl}/>
        <img src={spices[this.state.spiceInd].imageUrl}/>
      </div>
      : null}
    </div>
  );
}
}

export default App;

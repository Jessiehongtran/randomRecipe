import React from 'react';
import {veggies, proteins, carbs, spices} from '../data/ingredients';

class Randomize extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){

        const veggieInd = Math.floor(Math.random()*(veggies.length))
        console.log('here', veggieInd)


        return (
            <div></div>
        )
    }
}

export default Randomize;
import React, { Component } from 'react'
import MakeArray from './MakeArray.js';

export default class MakeDimension extends Component {
    constructor(props){
        super(props)
        this.MakeArray = new MakeArray(props.width, props.height)
        this.MakeArray.randomize();


    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

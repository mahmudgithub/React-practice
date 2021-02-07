import React, { Component } from 'react'
import Child from './Child'

export class Mother extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hi mahmd'
        }
    }

    
    render() {
        return (
            <div>
                <Child lol={this.state.message}/>
            </div>
        )
    }
}

export default Mother

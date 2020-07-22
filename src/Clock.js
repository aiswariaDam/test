import React, { Component } from 'react'

class Clock extends Component{
    constructor(props) {
        console.log('constructor ')
        super(props)
        this.state = {date : new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000 );  
            console.log('componentDidMount ', this.state)

    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date : new Date()
        });
    }
    render(){
        return(
            <div>
                <h1>Hi Welcome .. Now rime is ... </h1>
                <h2 >{this.state.date.toLocaleTimeString()}</h2>
            </div>
            
        )
    }
}

export default Clock
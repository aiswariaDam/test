import React, { Component } from 'react'

class Form extends Component{
    // initialState = {
    //     name : '',
    //     job : ''
    // }
    // state = this.setState

    constructor(props){
        super(props)
        this.state = {
            name:'',
            job:''}
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit = event => {
        alert('form submitted '+ this.state.name);
        event.preventDefault();
    }

    render(){
        const {name, job} = this.state

        return(
            <form onSubmit={this.handleSubmit}> 
                <label htmlFor="name">Name </label>
                <input  type="text" name="name"  id="name"  value={name} onChange={this.handleChange}></input>
                
                <label htmlFor="job">Job </label>
                <input type="text" name="job" id="job" value={job} onChange={this.handleChange}></input>

                <input type="submit" value="Submit" />
            </form>
        )
    }



}

export default Form
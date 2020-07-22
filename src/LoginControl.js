import React, { Component } from 'react'

function LoginButon(props){
    return(
        <button onClick = {props.onClick}> Login</button>
    )
}

function LogoutButton(props){
    return(
        <button onClick = {props.onClick}>Logout</button>
    )
}

function UserGreeting(props){
    return(
        <h1>Welcome User... </h1>
    )
}
function GuestGreeting(props){
    return(
        <h1>Welcome Guest  </h1>
    )
}
function Greeting(props){
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn)
    {
        return(<UserGreeting></UserGreeting>)
    }else{
        // we can even return null 
        return null
        // return(<GuestGreeting></GuestGreeting>)
    }
}
class LoginControl extends Component  {
    constructor(props){
        super(props)
        // bind method will bind with initial parameters with specified method
        // The bind() method creates a new function, when invoked, has the this sets to the provided value.
        // The bind() method allows an object to borrow a method from another object without making a copy of that method. 
        // This is known as function borrowing in JavaScript.

        this.handleLoginCheck = this.handleLoginCheck.bind(this)
        this.handleLogoutCheck = this.handleLogoutCheck.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.state = {isLoggedIn : false}
        console.log('constructor', this.state)
    }

    // we can implement handle button click in two way
    // either by one method or by two separate methods 
    handleButtonClick(){
        this.setState(state =>  ({isLoggedIn: !this.state.isLoggedIn }))
    }
    handleLoginCheck(){
        // console.log('handleLoginCheck ',{isLoggedIn } )
        this.setState({isLoggedIn : true})
    }
    handleLogoutCheck(){
        // console.log('handleLogoutCheck ',{isLoggedIn })
        this.setState({isLoggedIn: false})
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn
        console.log(' isLoggedIn ', {isLoggedIn})
        let button
        button =  (isLoggedIn ? 
        <LogoutButton onClick = {this.handleButtonClick}></LogoutButton> : 
            <LoginButon onClick={this.handleButtonClick}></LoginButon>)
         
        return(
            <div>
            <Greeting isLoggedIn={isLoggedIn}></Greeting>
            {button}
            </div>
        )
    }
}

export default LoginControl
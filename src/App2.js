import React, {Component} from 'react'
import Table from './Table.js'
import Clock from './Clock'
import Toggle from './Toggle'
import LoginControl from './LoginControl'
import Form from './Form'
import ToDoList from './ToDoList'
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component{
    
    state = {
        dataListState : [
            {
                name : 'Mittu',
                job : 'Mobile Devloper'
            },
            {
                name : 'Kuttu',
                job : 'Developer '
            },
            {
                name : 'Chintu',
                job : 'UI Design '
            }
        ]
    }

    removeFromList = (index) => {
        const characters = this.state.dataListState
        console.log('characters', characters )
         this.setState(
             {
                dataListStat : characters.filter((character, i) => { return i !== index})
             }
         )
         console.log('state', this.state)
    }
    render(){

        const dataList = [
            {
                name : 'Mittu',
                job : 'Mobile Devloper'
            },
            {
                name : 'Kuttu',
                job : 'Developer '
            },
            {
                name : 'Chintu',
                job : 'UI Design '
            }
        ]

        const {dataFromState} = this.state
        return(
            <Router>
                 <div className="App">  
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                
                <li>
                    <Link to="/addItems"> Add Items</Link>
                </li>
            </ul>
            <switch>
                <Route exact path = "/" component = {ToDoList}></Route>
                <Route exact path = "/addItems" commponet = {Form}></Route>
            </switch>
            </div>

            </Router>
           
            // {/* <LoginControl></LoginControl>
            // <h1>
            //     Welcome Aish.. !!</h1>
            //     <ToDoList></ToDoList>
            //     <Clock></Clock>
            //     <Form></Form>
            //     <Table characterData = {this.state} removeFromList = {this.removeFromList}></Table>
            //     <Toggle></Toggle> */}

        )
    }
}

export default App
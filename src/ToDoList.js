import React, { Component } from 'react'

const ToDoItem = props => {
    console.log('toDOItem ', props)
    return(
        <tr>
            <td>
                <label>{props.id}</label>
            </td>
            <td>
                <input></input>
            </td>
            <td>
                 <label>{props.createdAt.toTimeString()}</label>
            </td>
        </tr>
    )
}
class ToDOList extends Component{
    constructor(props){
        super(props)
        const toDoCounter = 1
        const date = new Date()
        this.state = {
            toDoCounter : toDoCounter,
            List : [
                {
                    id:toDoCounter,
                    createdAt:date
                }
            ]
        }
    }

    sortByEarliest(){
        const sortedList = this.state.List.sort((a, b) => {return (a.createdAt - b.createdAt)})
        this.setState({List:[...sortedList]})
    }

    sortByLatest(){
        const sortedList = this.state.List.sort((a, b) => {return(b.createdAt - a.createdAt)})
        this.setState({
            List:[...sortedList]
        })
    }

    addToStart(){
        const date = new Date()
        const nextCount= this.state.toDoCounter + 1
        const newList = [{id:nextCount,
            createdAt:date}, this.state.List]
        this.setState({
                List:newList,
                toDoCounter:nextCount
            })
    }

    addToEnd(){
        console.log('addToEnd ', this.state)
        const date = new Date()
        const nextCount = this.state.toDoCounter + 1
        const newList = [
            this.state.List,
            {id:nextCount,
            createdAt:date}
        ]
        console.log('addToEnd newList', newList)
        this.setState({
            List:newList,
            toDoCounter:nextCount
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.addToEnd.bind(this)}> Add To End</button>
                <button onClick= {this.addToStart.bind(this)}> Add to Start</button>
                <br></br>
                <button onClick={this.sortByEarliest.bind(this)}> Sort by Earliest</button>
                <button onClick={this.sortByLatest.bind(this)}> Sort by latest</button>

                <br></br>

                <table>
                    <tr>
                    <th>ID</th>
                    <th>Created Date</th>
                    </tr>
                    {this.state.List.map((doItems, index) => (<ToDoItem key = {index} {...doItems} >  </ToDoItem>))}
                </table>
            </div>
            )
    }
    
}

export default ToDOList
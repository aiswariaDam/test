import React, { Component } from 'react'

const TabbleHeader = () => {
    return(
        <thead>
            <th>
                <tr>
                <td>
                    Employee
                </td>
                <td>
                    Name
                </td>
                </tr>
                
            </th>
        </thead>
    )
}
const TabbleBody = props => {
    const rows = props.dataValue.map((row, index) => {
        return(
                <tr>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                </tr>
        ) 
    })
    return(
        <tbody>{rows}</tbody>
    )
}
          
    


class Tabble1 extends Component{
    render(){
        const dataList = this.props.dataValue
        return(
            <table>
                <TabbleHeader></TabbleHeader>
                <TabbleBody dataValue = {dataList}></TabbleBody>
            </table>
        )
    }
}

export default Tabble1
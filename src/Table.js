import React, {Component} from 'react'
 
const TableHeader  = () => {
    return(
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
    )
}

const TableBoby1 = () => {
    return (
            <tbody>
                    <tr>
                        <td>Charlie</td>
                        <td>Janitor</td>
                    </tr>
                    <tr>
                        <td>Mac</td>
                        <td>Bouncer</td>
                </tr>
                <tr>
                     <td>Dee</td>
                    <td>Aspiring actress</td>
                </tr>
            <tr>
                    <td>Dennis</td>
                    <td>Bartender</td>
            </tr>
            </tbody>
    )
}

const TableBody = props => {
    console.log("Hi.....");
    console.log('TableBody', props.dataValues)
    const rows = props.dataValues.dataListState.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
              <button onClick={() => props.removeFromList(index)}> Delete</button>
          </td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }


class Table extends Component{
    render(){
        const {characterData, removeFromList}=  this.props
        return(
            <table>
                <TableHeader/>
                <TableBoby1/>
                <TableBody   dataValues= {characterData} removeFromList= {removeFromList}/>
                
        </table>
        )
    }
}

export default Table
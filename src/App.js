import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component{
    render(){
        return(
            <Router>
                <div className="App">
                    <ul>
                        <li>

                            <Link path = "/"> Home </Link>
                        </li>
                        <li>
                            <Link path = "/about"> About </Link>
                        </li>
                        <li>
                            <Link path = "/contact"> Contact</Link>
                        </li>
                    </ul>
                </div>
            </Router>
            

        )
    }
}
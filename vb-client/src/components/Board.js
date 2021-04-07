import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Board extends Component {
    render() {
        const { title, createdby, id, created_at } = this.props
        return (
            
            <div>
                <Link to={`/boards/${id}`}><h3>{ title }</h3></Link>
                <li>Created By: { createdby }</li>
                <p>{created_at}</p>
                
            </div>
            
            
            
        )
    }
}

export default Board

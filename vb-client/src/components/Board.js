import React, { Component } from 'react'

class Board extends Component {
    render() {
        const { title, createdby, description } = this.props
        return (
            <>
          
            <div>
                <h3>{ title }</h3>
                <li>Created By: { createdby }</li>
                <p>{ description }</p>
                
                
            </div>
            </>
        )
    }
}

export default Board

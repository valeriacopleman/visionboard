import React, { Component } from 'react'

import Form from './components/Form'

class Board extends Component {
    render() {
        const { title, createdby, description } = this.props
        return (
            <>
            <Form />
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

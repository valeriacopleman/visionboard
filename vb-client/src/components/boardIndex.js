import React, { Component } from 'react'
import { connect } from 'react-redux';
import Board from './Board'

class boardIndex extends Component {
    render() {
        const boards = this.props.boards.map( (board, i) => <Board key={i} title={board.title} description={board.description} createdby={board.createdby} />)
        return (
            <div>
                { boards }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        boards: state.boards
    }
}

export default connect(mapStateToProps)(boardIndex);

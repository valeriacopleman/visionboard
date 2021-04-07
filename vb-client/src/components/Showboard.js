import React, { Component } from 'react'
//import Board from './component/Board'
import { showBoard } from '../actions/boards'
import { connect} from 'react-redux'
import { deleteBoard } from '../actions/boards'




class Showboard extends Component {

    
    componentDidMount(){
        const id = this.props.match.params.id
        this.props.showBoard(id)
    }

    render() {
        const onClick = () => {
            const id = this.props.match.params.id
            this.props.deleteBoard(id)
          }
        return (
            <div>
               
               <a href="#center" onClick={onClick}>Delete</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.boards.showBoard,
    
  })



export default connect(mapStateToProps, { showBoard, deleteBoard })(Showboard)
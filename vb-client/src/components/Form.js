import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBoard } from '../actions/boards'

class Form extends Component {

    state = {
        title: "",
        description: "",
        createdby: ""
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addBoard(this.state, this.props.history);
    }

    render() {
       

        return (
            <div>
                <h3>Create Board</h3>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" name="title" value={this.state.title} onChange={ this.handleChange } />
                    </div>
                    <br />
                    <div>
                    <label htmlFor="descripton">Description: </label>
                    <input type="text" id="description" name="description" value={this.state.description} onChange={ this.handleChange } />
                    </div>
                    <br />
                    <div>
                    <label htmlFor="createdby">Created By: </label>
                    <input type="text" id="createdby" name="createdby" value={this.state.createdby} onChange={ this.handleChange } />
                    </div>
                    <br />
                    <input type="submit" value="Create Board" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addBoard })(Form)

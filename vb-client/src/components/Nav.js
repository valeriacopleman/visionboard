import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/boards">Vision Boards</Link></button>
                    
                </ul>
                <br />
            </div>
        )
    }
}

export default Nav
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <Link to='/' className='nav-title'>DocToo</Link>
                <div className='nav-cnx'> 
                    <Link to='/login'>Connexion</Link>
                    <button>S'inscrire</button>
                </div>
            </div>
        );
    }
}

export default navbar;
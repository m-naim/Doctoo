import React, { Component } from 'react';
import Navbar from './components/navbar';

class doctor extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <div>
                        <img src="#" alt="image de profile"/>
                        <h1>doc name</h1>
                        <span>Spécialité</span>
                        <span>address</span>
                    </div>
                    <div>
                        <h1>presentation</h1>
                        <span>discription</span>
                    </div>
                    <div>
                        <h1>Etudes</h1>
                        <p>1999</p>
                        <h2>Experiences</h2>
                        <p>Depuis ...</p>
                    </div>
                    <div>
                        <h1>horaires</h1>
                    </div>
                    <div>
                        <h1>Tarifs</h1>
                    </div>

                </div>
                

            </div>
        );
    }
}

export default doctor;
import {DoctorContext} from '../store/doctorContext'
import {Link} from 'react-router-dom';
import React, { Component } from 'react';

class DocDiv extends Component {
    render() {
        return(
            <div  className="doctor-card">
                <div>
                    <img src="https://cdn4.iconfinder.com/data/icons/professions-1-2/151/3-512.png" alt="avatar doctor" 
                        width="60" />
                </div>
                <div className="doctor-card-infos" >
                    <span className="doctor-card-name"> Dr { this.props.data.firstName}  { this.props.data.lastName}</span>
                    <span>{this.props.data.specialty}</span>
                    <span className="doctor-card-address">{ this.props.data.address}</span>
                    <div className="doctor-card-btns">
                        <Link to={`/doctor/${this.props.data._id}`} >Voir plus</Link>
                        <input type="button" id={this.props.data._id} value="Rendez vous"
                        onClick={(e)=>this.context.selectDoctor(e.target.id)}
                        />
                    </div>
                </div>
                
            </div>
        )
    }
}
DocDiv.contextType=DoctorContext;

export default DocDiv;
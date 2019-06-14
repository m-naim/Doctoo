import moment from 'moment';
import React, { Component } from 'react';

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

let days=[]
for(let i=0;i<5;i++){ days.push(moment().add(i,'days').format('dddd D MMM'))}
let hours=['9','10','11','13','14','15']


class hoursButtons extends Component {
    render() {
        const taken=this.props.rdvTaken.filter(e=>this.props.d==e.day).map(e=>e.hour)
        const dispo=hours.diff(taken);
        return(
            dispo.map((h,k)=> <div key={k} className='rdv-option'> 
            <button className="rdv-btn-time" value={h+'/'+this.props.d} onClick={this.props.dateSelected}>
            {h}:00
            </button> 
            </div>)
        )
    }
}

export default hoursButtons;


import React, { Component } from 'react';
import Axios from 'axios';
import HoursButtons from './hoursButtons';
import moment from 'moment';
import axios from 'axios';
import {DoctorContext} from '../store/doctorContext'

let days=[]
for(let i=0;i<5;i++){ days.push(moment().add(i,'days').format('dddd D MMM'))}
let hours=['9','10','11','13','14','15']

class rdvDiv extends Component {
    constructor(props) {
        super(props);
        this.state={
            dateSelected:'',
            rdvs:[]
        }
    }
    
    dateSelected=(e)=>{
        this.setState({dateSelected: e.target.value});
 }
    setRdv=()=>{
        const date=this.state.dateSelected.split('/');
        const rdv={
            doctor: this.props.info._id,
            user: window.localStorage.jwt,
            date: date[1],
            hour: date[0]
        };
    
        Axios.post('/setrdv',rdv)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

    }
    findFreeHours=(e)=>{
        setInterval(()=>{
            axios.get('/getrdvhours',{params:{
                doc: this.props.info._id
            }})
            .then(res=>{
                this.setState({rdvs: res.data});
                console.log('this.state.rdvs',this.state.rdvs)
            })
        },5000)
        
    }

    handleSelect= (e) =>{
        this.setState({selected: this.state.results.find(d=>d._id===e.target.id)});
    }

    componentDidMount(){
        this.findFreeHours();
    }

    render() {
        const tbody=days.map((d,k)=>
        <div key={k} className='rdv-picker-body-dates'> 
        <div className="rdv-date" >{d}</div>
            <HoursButtons d={d} rdvTaken={this.state.rdvs} dateSelected={this.dateSelected} />
        </div>)

        return (
            <div className="rdv-picker">
                <div className="rdv-picker-header">
                    <h4>Prendre un rdv avec Dr {this.props.info.lastName}</h4>
                </div>
                <div className="rdv-picker-body">
                        {tbody}
                </div>
                <div className="rdv-picker-footer">
                    <button onClick={this.setRdv}>prendre le rendez-vous</button>
                </div>
                
            </div>
        );
    }
}

rdvDiv.contextType=DoctorContext;

export default rdvDiv;
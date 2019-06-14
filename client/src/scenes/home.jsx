import axios from 'axios';
import React, { Component } from 'react';
import DocDiv from './components/docDiv';
import RdvDiv from './components/rdvDiv';
import Navbar from './components/navbar';
import {DoctorContext} from './store/doctorContext'

class home extends Component {
    constructor(props){
        super(props)

        this.selectDoctor=(id)=>{this.setState({doctorSelected: id,
            doctorInfo: this.state.results.find(e=>e._id===id)
        })}

        this.state={
            results: [],
            doctorSelected: null,
            selectDoctor: this.selectDoctor,
            doctorInfo:{}
        }
    }
    handleSearch=()=>{ 
        axios.get('http://localhost:8080/docs')
        .then( res=> this.setState({results: res.data}))
        .catch(
            err => console.log(err)
          )
    }


    render() {
        const docs= this.state.results.map( (d,k)=> <DocDiv select={this.handleSelect} key={k} data={d}/>)
        return (
            <div className="App">
                <Navbar />
                <div className="search-group">
                    <input type="text" name='variante'/>
                    <input type="text" name="place" />
                    <button onClick={this.handleSearch}>chercher</button>
                </div>
                <DoctorContext.Provider value={this.state}>
                    <div className='result-container'>
                        <div className='doc-container'>
                            {docs}
                        </div>
                        <div className='rdv-container'>
                            {this.state.doctorSelected?<RdvDiv info={this.state.doctorInfo} />:null}
                        </div>
                    </div>
                </DoctorContext.Provider>
                <div className="footer">
                    <div>Made with <span class="heart">♥</span> by m-naim</div>
                </div>

            </div>
        );
    }
}

export default home;
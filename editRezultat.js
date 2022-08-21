import React, { Component } from 'react';
import rezultatServer from './services/rezultat';

export default class EditRezultat extends Component {

  constructor(props) {
    super(props);
    
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeFinishTime = this.onChangeFinishTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullName: '',
      finishTime: '',
     
    }
  }

  

 

  onChangeFullName(e) {
    this.setState({
      fullName: e.target.value
    })
  }

  onChangeFinishTime(e) {
    this.setState({
      finishTime: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const rezultat = {
      fullName: this.state.fullName,
      raceTime: this.state.finishTime
      
    }
    if(this.state.fullName !='' && this.state.finishTime != ''){
      rezultatServer.updetajRezultat(this.props.match.params.id, rezultat)
       .then(response => { 
            console.log(response.data)
            console.log(response);
            window.confirm(" uspješno promjenjeno!");
            if(window.confirm)
            {
              window.location = '/list';

            }
          })
           .catch(err=> {
             
           
            window.confirm("error");
            if(window.confirm)
            {
              window.location = '/list';

            }


              
          });

    }else{
      window.alert('unesi ime i vrijeme');
    }
    
    
          
         

  }

  

  render() {
    return (
    <div>
      <h3>Edit result</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
        </div>
        <div className="form-group"> 
          <label>fullName: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.fullName}
              onChange={this.onChangeFullName}
              />
        </div>
        <div className="form-group">
          <label>Duration : </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.finishTime}
              onChange={this.onChangeFinishTime}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Result Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
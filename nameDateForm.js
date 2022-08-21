import React, { useState,useCallback } from 'react';
import utrkaServer from './services/utrka';
import rezultatServer from './services/rezultat';
import { OutTable, ExcelRenderer } from "react-excel-renderer";



class NameDateForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',date:'', trke:[], rows:'',cols:''};
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeDate = this.handleChangeDate.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.btn = this.btn.bind(this);

      this.fileHandler=this.fileHandler.bind(this);
    }
   
  
    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeDate(event) {
      this.setState({date: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      if(this.state.name==''){
        alert('Please enter the name of the race: ');
      }
      if(this.state.date==''){
        alert('Please select the date of the race: ');
      }
      if(this.state.name!='' && this.state.date!=''){
        var race={
          raceName:this.state.name,
          raceDate:this.state.date
        }
        console.log(race)
        utrkaServer.dodajUtrku(race).then(res => console.log(res.data))
        window.confirm("uspiješno dodana nova utrka");
        window.localStorage.setItem('utrka',race.raceName)
      }

      
    }
    btn(event){
      event.preventDefault();
      window.location='/list';
    }
    fileHandler = (event) => {
      let fileObj = event.target.files[0];
  
      ExcelRenderer(fileObj, (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({
            cols: resp.cols,
            rows: resp.rows
          });
          let nizmedium=[];
          let nizlong=[];
         
          for (let i = 0; i < resp.rows.length; i++) {
            if(resp.rows[i][0].split(',')[1]=="medium"){
              nizmedium.push(resp.rows[i][0].split(',')[2])
              nizmedium.sort()
            }
          }
          for (let i = 0; i < resp.rows.length; i++) {
            if(resp.rows[i][0].split(',')[1]=="medium"){
              for (let j = 0; j < nizmedium.length; j++) {
                if(resp.rows[i][0].split(',')[2]==nizmedium[j])
                var rezultatmedium={
                  fullName:resp.rows[i][0].split(',')[0],
                  distance:resp.rows[i][0].split(',')[1],
                  raceTime:resp.rows[i][0].split(',')[2],
                  placement:j+1,
                  name:this.state.name
    
                }
                
              }
              rezultatServer.dodajRezultat(rezultatmedium).then(res => console.log(res.data))

            }
            
          }

          for (let i = 0; i < resp.rows.length; i++) {
            if(resp.rows[i][0].split(',')[1]=="long"){
              nizlong.push(resp.rows[i][0].split(',')[2])
              nizlong.sort()
            }
          }
          for (let i = 0; i < resp.rows.length; i++) {
            if(resp.rows[i][0].split(',')[1]=="long"){
              for (let j = 0; j < nizlong.length; j++) {
                if(resp.rows[i][0].split(',')[2]==nizlong[j])
                var rezultatlong={
                  fullName:resp.rows[i][0].split(',')[0],
                  distance:resp.rows[i][0].split(',')[1],
                  raceTime:resp.rows[i][0].split(',')[2],
                  placement:j+1,
                  name:this.state.name
    
                }
                
              }
              rezultatServer.dodajRezultat(rezultatlong).then(res => console.log(res.data))
              console.log(rezultatlong)
            }

          }
         

        }
      });

    };
    
 
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name of the race:
            <input type="text" value={this.state.value} onChange={this.handleChangeName} /> <br></br>
            Date:
            <input type="date" value={this.state.value} onChange={this.handleChangeDate} /> <br></br>
          </label>
          <input type="submit" value="Submit" />
          
          <div className="App">
        <header className="App-header">
          <input
            type="file"
            onChange={this.fileHandler.bind(this)}
            style={{ padding: "10px" }}
          />
          <div>
            {this.state.rows && (
              <OutTable
                data={this.state.rows}
                columns={this.state.cols}
              />
            )}
          </div>
        </header>
      </div>
      <button onClick={this.btn}>Edit each result</button>
        </form>
      );
    }
  }

  export default NameDateForm

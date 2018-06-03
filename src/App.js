import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor(){
    super();
    this.state = {
      endpoint : 'http://localhost:4000',
      response : []
    }
  }
  componentDidMount(){
    const {endpoint} = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('update',(data)=>{
      this.setState({response : data});
    });
  }
  getRows(){
     return this.state.response.map((i,key)=>{
       
      return (
      <tr key={i.equip_id}>
      <td key={key} className="collection-item">{i.equip_id}</td>
      <td key={i.equip_id} className="collection-item">{i.color}</td>
      </tr>
      );
    })
  }
  render() {
    return (
        <table>
          <thead>
          <tr>
          <th>ID</th>              
          <th>Color</th>  
          </tr>
          </thead>  
          <tbody>
              {this.getRows()}
          </tbody>
        </table>
    );
  }
}

export default App;

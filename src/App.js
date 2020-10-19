import React, { Component } from 'react'
import randomcolor from 'randomcolor'

class App extends Component {
  
  constructor () {
    super()
    this.state = {
      color: "",
      textcolor: "",
      counter: 0
    }
    
    this.changeColor = this.changeColor.bind(this)
 
  }
  
  changeColor () {
    this.setState(prevState => {
      return {
        color: randomcolor(),
        textcolor: randomcolor(),
        counter: prevState.counter + 1
        
      }
    })
  }

  render () {
    return (
        
      <div className="main-container" >
              
              <div style={{backgroundColor: this.state.color}}>
                <button style={{color:this.state.color}} onClick={this.changeColor}>Change</button>
                <h2 style={{color:this.state.textcolor}}>Click <hr />No {this.state.counter}</h2>
                
             </div>
             
            </div>
       
    ) 
  }
}


export default App
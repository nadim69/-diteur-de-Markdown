import React, { Component } from 'react';
import './App.css';
import {sampleText} from './SampleText';
import marked from 'marked'



class App extends Component {
  state= {
    text: sampleText
  }
  
  handleChange= (event)=>{
    const text= event.target.value
    this.setState({
     text
    })
  }
  textmarked = text => marked(text, {sanitize: true})
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <textarea 
            className="form-control"
             rows="35" 
             value= {this.state.text}
             onChange= {this.handleChange}
             >
            </textarea>
          </div>
          <div className="col-6">
           <p dangerouslySetInnerHTML= {{ __html: this.textmarked(this.state.text)}} ></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

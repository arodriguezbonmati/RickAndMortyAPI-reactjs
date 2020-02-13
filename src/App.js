import React, {Component} from 'react';
import './App.css';

import Data from "./assets/data"
import Character from "./Components/Character"
import "./Components/Styles.css"


class App extends Component{
  state = {...Data}
  render(){
    return (
      <div className="App">
        <div className="content">
          <div className="title"> THE RICK AND MORTY API </div>
          <div className="main_content">
            {this.state.results.map(item => {
              return <Character key={item.id} characterInfo={item} />
            })}
          </div>
        </div>
      </div>

    );
    }
}


export default App;

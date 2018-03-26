import React, {Component} from 'react'
import SearchContainer from './containers/searchcontainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Github Issues Console</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default App;

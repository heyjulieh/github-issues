import React, {Component} from 'react'
import IssueContainer from './containers/issuecontainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Github Issues Console</h1>
        <IssueContainer />
      </div>
    );
  }
}

export default App;

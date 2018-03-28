import React, {Component} from 'react'
import IssueContainer from './containers/issuecontainer'
import IssueList from './components/issuelist'

class App extends Component {

  searchAuthors(query){
    console.log("Our App knows the query: " + query)
  }

  render() {
    return (
      <div className="app">
        <h1><img className="bootstrapicon" alt="bootstrap" src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"/>Bootstrap Github Issues Console</h1>
        <IssueContainer />
      </div>
    );
  }
}

export default App;

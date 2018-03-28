import React, {Component} from 'react'
import Issue from './issue'
import Author from './author'
import Label from './label'
import $ from 'jquery-ajax'


class IssueList extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    };
  }
  updateSearch(event) {
    this.setState({search: event.target.value})
  }

	render() {

		let issuesArray = this.props.issues.map( (issue) => {
      if (issue.labels.length > 0){
  			return (
  				<Issue
  					key={issue.id}
            assignee={issue.assignee}
            user={issue.user}
  					title={issue.title}
            number={issue.number}
            labels={issue.labels[0].color}
            state={issue.state}
            comments={issue.comments}
            created_at={issue.created_at}/>
  			)
      }
      else {
        return (
          <Issue
            key={issue.id}
            assignee={issue.assignee}
            user={issue.user}
            title={issue.title}
            number={issue.number}
            labels='ffffff'
            state={issue.state}
            comments={issue.comments}
            created_at={issue.created_at}/>
        )
      }
		});
    let filteredAuthorArray = this.props.issues.filter(
      (issue) => {
        return issue.user.login.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    let authorsArray = filteredAuthorArray.map( (issue) => {
			return (
				<Author
          key={issue.id}
          user={issue.user}/>
			)
    });
    let filteredLabelArray = this.props.issues.filter(
      (issue) => {
        if (issue.labels.length > 0){
          return issue.labels[0].color.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      }
    );
    let labelsArray = filteredLabelArray.map( (issue) => {
      if (issue.labels.length > 0){
  			return (
  				<Label
            key={issue.id}
            labels={issue.labels[0].color}/>
  			)
      }
      else {
        return (
          <Label
            key={issue.id}
            labels='None'/>
        )
      }
    });
		return(
      <div className="wrapper">
        <div className="tableheader column a"></div>
        <div className="tableheader column b">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Author <span className="glyphicon glyphicon-menu-down"></span></a>
            <ul className="dropdown-menu" id="authorUL">
              <input type="text"
                      value={this.state.search}
                      onChange={this.updateSearch.bind(this)}/>
              {authorsArray}
            </ul>
          </li>
        </div>
        <div className="tableheader column c">
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">Label <span className="glyphicon glyphicon-menu-down"></span></a>
              <ul className="dropdown-menu" id="labelUL">
              <input type="text"
                      value={this.state.search}
                      onChange={this.updateSearch.bind(this)}/>
                {labelsArray}
              </ul>
            </li>
        </div>
        <div className="tableheader column d">Status</div>
        <div className="tableheader column e">Assignee</div>
        <div className="tableheader column f"><a className="dropdown-toggle" href="#">Sort <span className="glyphicon glyphicon-menu-down"></span></a></div>
        {issuesArray}
      </div>
		)
	}
}

export default IssueList;

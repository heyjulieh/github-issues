import React, {Component} from 'react'
import Issue from './issue'

class IssueList extends Component {

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

		return(
      <div className="wrapper">
        <div className="tableheader column a"></div>
        <div className="tableheader column b">Author <span className="glyphicon glyphicon-menu-down"></span></div>
        <div className="tableheader column c">Labels <span className="glyphicon glyphicon-menu-down"></span></div>
        <div className="tableheader column d">Status <span className="glyphicon glyphicon-menu-down"></span></div>
        <div className="tableheader column e">Assignee <span className="glyphicon glyphicon-menu-down"></span></div>
        <div className="tableheader column f">Sort <span className="glyphicon glyphicon-menu-down"></span></div>
        {issuesArray}
      </div>
		)
	}
}

export default IssueList;

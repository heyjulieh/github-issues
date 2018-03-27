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
            milestone={issue.milestone}
            comments={issue.comments}
            created_at={issue.created_at}/>
  			)
      }
      if (issue.labels.length === 0) {
        <Issue
          key={issue.id}
          assignee={issue.assignee}
          user={issue.user}
          title={issue.title}
          number={issue.number}
          milestone={issue.milestone}
          comments={issue.comments}
          created_at={issue.created_at}/>
      }
		});

		return(
      <div className="wrapper">
        <div className="tableheader column a"></div>
        <div className="tableheader column b">Author</div>
        <div className="tableheader column c">Labels</div>
        <div className="tableheader column d">Milestones</div>
        <div className="tableheader column e">Assignee</div>
        <div className="tableheader column f">Sort</div>
        {issuesArray}
      </div>
		)
	}
}

export default IssueList;

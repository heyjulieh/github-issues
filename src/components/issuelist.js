import React, {Component} from 'react'
import Issue from './issue'

class IssueList extends Component {
	render() {
		let issuesArray = this.props.issues.map( (issue) => {
			return (
					<Issue
						key={issue.id}
						issue={issue}
            assignee={issue.assignee}
            user={issue.user}
						title={issue.title}
            number={issue.number} />
			)
		});

		return(
			<div className="container-fluid">
        <table>
          <tr className="tableheader">
            <th></th>
            <th>Author</th>
            <th>Labels</th>
            <th>Milestones</th>
            <th>Assignee</th>
            <th>Sort</th>
          </tr>
          {issuesArray}
        </table>
			</div>
		)
	}
}

export default IssueList;

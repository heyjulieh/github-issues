import React, {Component} from 'react'


class Issue extends Component {

	render() {

	  let issueLink = `https://api.github.com/repos/twbs/bootstrap/issues/${this.props.number}`
		return(

			<div>
      <tr>
      </tr>
				<a href={issueLink}>
				<img src={this.props.user.avatar_url}/>
				<p>{this.props.issue.user.login}</p>
				</a>
			</div>

		)
	}
}

export default Issue;

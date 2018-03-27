import React, {Component} from 'react'
import $ from 'jquery-ajax'
import IssueList from '../components/issuelist'

class IssueContainer extends Component {
	constructor() {
		super();
		this.state = {
			issues: []
		}
		this.loadIssuesFromServer = this.loadIssuesFromServer.bind(this);
	}

	loadIssuesFromServer() {
		$.ajax({
			method: 'GET',
			url: 'https://api.github.com/repos/twbs/bootstrap/issues'
		})
		.then( res => this.setState({issues: res}))
	}

	componentDidMount(){
		this.loadIssuesFromServer();
	}

	render() {
    console.log('issues are:', this.state.issues)
		return(
			<div>
				<IssueList
					issues={this.state.issues}
				/>
			</div>
		)
	}
}

export default IssueContainer;

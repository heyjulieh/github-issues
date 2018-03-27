import React, {Component} from 'react'


class Issue extends Component {

	render() {

	  let issueLink = `https://api.github.com/repos/twbs/bootstrap/issues/${this.props.number}`
    if (this.props.labels.length > 0) {
      return(
        <div className="tablerow">
            <div className="column a rowheader"><p>{this.props.title}</p></div>
            <div className="column b"><img className="user" src={this.props.user.avatar_url}/> <p>{this.props.user.login}</p> </div>
            <div className="column c"><p>{this.props.labels}</p></div>
            <div className="column d"><p>{this.props.milestone}</p></div>
            <div className="column e"><p>{this.props.assignee}</p></div>
            <div className="column f"><a href={issueLink}><img  className="commenticon" src="https://image.flaticon.com/icons/svg/134/134808.svg"></img> <span>{this.props.comments}</span></a></div>
        </div>

  		)
    }
    else if (this.props.labels.length == 0) {
      return(
          <div className="tablerow">
            <div className="column a rowheader"><p>{this.props.title}</p></div>
            <div className="column b"><img className="user" src={this.props.user.avatar_url}/> <p>{this.props.user.login}</p> </div>
            <div className="column c">none</div>
            <div className="column d"><p>{this.props.milestone}</p></div>
            <div className="column e"><p>{this.props.assignee}</p></div>
            <div className="column f"><a href={issueLink}><img className="commenticon" src="https://image.flaticon.com/icons/svg/134/134808.svg"></img> <span>{this.props.comments}</span></a></div>
          </div>
      )
    }
	}
}

export default Issue;

import React, {Component} from 'react'


class Issue extends Component {

	render() {
	  let issueLink = `https://api.github.com/repos/twbs/bootstrap/issues/${this.props.number}`

    var now = new Date();
    console.log('it is now: ', now)
    var created_date = new Date(this.props.created_at)
    console.log('created date is: ', created_date)
    var milli = (now - created_date);
    var days = Math.floor(milli / 86400000);

    return(
      <div style={{background: `#${this.props.labels}`}} className="tablerow">
        <div className="column a rowheader">
          <h4><a href={issueLink} className="titlelink">{this.props.title}</a></h4>
          <p># {this.props.number} opened {days} days ago by {this.props.user.login}</p>
        </div>
        <div className="column b"></div>
        <div className="column c"><p>{this.props.labels}</p></div>
        <div className="column d"><p>{this.props.state}</p></div>
        <div className="column e"><p>{this.props.assignee}</p></div>
        <div className="column f"><a href={issueLink}><img  className="commenticon" src="https://image.flaticon.com/icons/svg/134/134808.svg"></img> <span>{this.props.comments}</span></a></div>
      </div>

		)

	}
}

export default Issue;

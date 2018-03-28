import React, {Component} from 'react'


class Issue extends Component {

	render() {
	  let issueLink = `https://api.github.com/repos/twbs/bootstrap/issues/${this.props.number}`

    let now = new Date();
    let created_date = new Date(this.props.created_at)
    let milli = (now - created_date);
    let days = Math.floor(milli / 86400000);
    let hours = Math.floor(milli/3600000);
    let minutes = Math.floor(milli/60000);
    if (days === 1) {
      return(
        <div style={{background: `#${this.props.labels}`}} className="tablerow">
          <div className="column a rowheader">
            <h4><a href={issueLink} className="titlelink">{this.props.title}</a></h4>
            <p># {this.props.number} opened {days} day ago by {this.props.user.login}</p>
          </div>
          <div className="column b"></div>
          <div className="column c"><p></p></div>
          <div className="column d"><p>{this.props.state}</p></div>
          <div className="column e"><p>{this.props.assignee}</p></div>
          <div className="column f"><a href={issueLink}><img className="commenticon" alt="comments" src="https://image.flaticon.com/icons/svg/134/134808.svg"></img> <span>{this.props.comments}</span></a></div>
        </div>
      )
    }
    if (days < 1 && hours > 1) {
      return(
        <div style={{background: `#${this.props.labels}`}} className="tablerow">
          <div className="column a rowheader">
            <h4><a href={issueLink} className="titlelink">{this.props.title}</a></h4>
            <p># {this.props.number} opened {hours} hours ago by {this.props.user.login}</p>
          </div>
          <div className="column b"></div>
          <div className="column c"><p></p></div>
          <div className="column d"><p>{this.props.state}</p></div>
          <div className="column e"><p>{this.props.assignee}</p></div>
          <div className="column f"><a href={issueLink}><img className="commenticon" alt="comments" src="https://image.flaticon.com/icons/svg/134/134808.svg"></img> <span>{this.props.comments}</span></a></div>
        </div>
  		)
    }
    if (hours === 1) {
      return(
        <div style={{background: `#${this.props.labels}`}} className="tablerow">
          <div className="column a rowheader">
            <h4><a href={issueLink} className="titlelink">{this.props.title}</a></h4>
            <p># {this.props.number} opened {hours} hour ago by {this.props.user.login}</p>
          </div>
          <div className="column b"></div>
          <div className="column c"><p></p></div>
          <div className="column d"><p>{this.props.state}</p></div>
          <div className="column e"><p>{this.props.assignee}</p></div>
          <div className="column f"><a href={issueLink}><img className="commenticon" alt="comments" src="https://image.flaticon.com/icons/svg/134/134808.svg"></img> <span>{this.props.comments}</span></a></div>
        </div>
  		)
    }
    if (days < 1 && hours < 1) {
      return(
        <div style={{background: `#${this.props.labels}`}} className="tablerow">
          <div className="column a rowheader">
            <h4><a href={issueLink} className="titlelink">{this.props.title}</a></h4>
            <p># {this.props.number} opened {minutes} minutes ago by {this.props.user.login}</p>
          </div>
          <div className="column b"></div>
          <div className="column c"><p></p></div>
          <div className="column d"><p>{this.props.state}</p></div>
          <div className="column e"><p>{this.props.assignee}</p></div>
          <div className="column f"><a href={issueLink}><img className="commenticon" alt="comments" src="https://image.flaticon.com/icons/svg/134/134808.svg"></img> <span>{this.props.comments}</span></a></div>
        </div>
  		)
    }
    else {
      return(
        <div style={{background: `#${this.props.labels}`}} className="tablerow">
          <div className="column a rowheader">
            <h4><a href={issueLink} className="titlelink">{this.props.title}</a></h4>
            <p># {this.props.number} opened {days} days ago by {this.props.user.login}</p>
          </div>
          <div className="column b"></div>
          <div className="column c"><p></p></div>
          <div className="column d"><p>{this.props.state}</p></div>
          <div className="column e"><p>{this.props.assignee}</p></div>
          <div className="column f"><a href={issueLink}><img className="commenticon" alt="comments" src="https://image.flaticon.com/icons/svg/134/134808.svg"></img> <span>{this.props.comments}</span></a></div>
        </div>
      )
    }
	}
}

export default Issue;

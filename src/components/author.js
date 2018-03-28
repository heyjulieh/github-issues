import React, {Component} from 'react'


class Author extends Component {

	render() {
      return(
        <li id={this.props.user.id} className="container-fluid">
          <img className="user" src={this.props.user.avatar_url} alt="user"/> <p className="user">{this.props.user.login}</p>
        </li>
      )
	}
}

export default Author;

import React, {Component} from 'react'
import $ from 'jquery-ajax'


class Author extends Component {

	render() {
    return(
      <li id={this.props.user.id} className="container-fluid">
        <img className="userimg" src={this.props.user.avatar_url} alt="user"/> <p className="user">{this.props.user.login}</p>
      </li>
    )
	}
}

export default Author;

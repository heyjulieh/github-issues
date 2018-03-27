import React, {Component} from 'react'


class Author extends Component {

	render() {
    {
      return(
        <div class="container-fluid">
          <img class="user" src={this.props.user.avatar_url} alt="user"/> <p>{this.props.user.login}</p>
        </div>
      )
    }
	}
}

export default Author;

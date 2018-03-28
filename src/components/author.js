import React, {Component} from 'react'
import $ from 'jquery-ajax'


class Author extends Component {
  constructor(){
    super();
    this.state = {
      clickOnAuthor: '',
    };
  }

  updateAuthorSearch(event) {
    let author = $(this).closest('p').prevObject[0].props.user.login
    this.setState({clickOnAuthor: author})
  }


	render() {
    return(
      <li id={this.props.user.id} className="container-fluid"
          value={this.state.searchAuthor}
          onClick={this.updateAuthorSearch.bind(this)}>
        <img className="user" src={this.props.user.avatar_url} alt="user"/> <p className="user">{this.props.user.login}</p>
      </li>
    )
	}
}

export default Author;

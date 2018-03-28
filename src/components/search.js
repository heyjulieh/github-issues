import React, {Component} from 'react'

class Search extends Component {

  handleSearch(event) {
    this.props.searchAuthors(event.target.value)
  }

  render() {
    return (
      <li><input type="text" onKeyUp={this.handleSearch.bind(this)}/></li>
    )
  }
}

export default Search;

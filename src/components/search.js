import React, {Component} from 'react'

console.log('made it to search.js from container')


class Search extends Component {
  render() {
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <div className="searchForm" style={{display: 'flex', justifyContent: 'center'}}>
        <form onSubmit={(event) => handleSubmitQuery(event)}
            className="search">
          <input
          onChange={(event) => handleSearchInput(event)}
          type="text"
          placeholder="search for an author"
          value={query} />
            <button type="submit"><img height="35px"src={"http://findicons.com/files/icons/949/token/256/search.png"}/></button>
        </form>
      </div>
    )
  }
}

export default Search;

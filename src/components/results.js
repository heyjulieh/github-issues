import React, {Component} from 'react'

console.log('made it to results.js from container')

class Results extends Component {
  render() {
    let authors = this.props.authors
    let results = authors.map( (author, index) => {
      return (
        <div key={index}>
          <img
            src={author.user.avatar_url}
            alt={author.user.login} />
          <p>{author.user.login}</p>
        </div>
      )
    })

    return (
      <div>
        {results}
      </div>
    )
  }
}

export default Results;

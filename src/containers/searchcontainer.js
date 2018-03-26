import React, {Component} from 'react'
import {queryGithub} from '../services/utilities'
import Search from '../components/search'
import Results from '../components/results'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
      authors: [],
      hasSearched: false,
      query: ''
    }
  }

  onSearchInput(event) {
    this.setState({
      query: event.target.value
    })
  }

  handleToggleSearch (event) {
    let hasSearched = !this.state.hasSearched
    this.setState(Object.assign(this.state, {hasSearched, }))
  }

  onSubmitQuery(event) {
    event.preventDefault()
    console.log('searched!')
    let component = this
    queryGithub(this.state.query).then( data => {
      component.setState({
        query: '',
        hasSearched: !component.state.hasSearched,
        authors: data
      })
    })
    console.log(this.state.authors)
    // return the received authors to this.state
    // somehow pass this.state up to search container, to be used in MovieList
  }

  render(){
    if (this.state.hasSearched){
      return(
        <div>
        <h2>Issues</h2>
          <button
            onClick={ event => this.handleToggleSearch(event) }
            className="btn btn-primary"><img height="15px" src={"http://findicons.com/files/icons/949/token/256/search.png"} /></button>
          <Results authors={this.state.authors} />
        </div>
      )
    } else {
        return (
          <Search
            handleSubmitQuery={(event) => this.onSubmitQuery(event)}
            handleSearchInput={(event) => this.onSearchInput(event)}
            query={this.state.query} />
        )
      }
    }
}

export default SearchContainer

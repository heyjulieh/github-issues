import React, {Component} from 'react'


class Label extends Component {
	constructor(){
    super();
    this.state = {
      search: ''
    };
  }
	updateSearch(event) {
    this.setState({search: event.target.value})
  }


	render() {
    return(
      <li style={{background: `#${this.props.labels}`}} id={this.props.labels} className="container-fluid"
				value={this.state.search}
				onChange={this.updateSearch.bind(this)}>
				<p>{this.props.labels}</p></li>
    )
	}
}

export default Label;

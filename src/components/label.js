import React, {Component} from 'react'


class Label extends Component {

	render() {
    return(
      <li style={{background: `#${this.props.labels}`}} id={this.props.labels} className="container-fluid"><p>{this.props.labels}</p></li>
    )
	}
}

export default Label;

import React, {Component} from 'react'


class Label extends Component {

	render() {
    {
      return(
        <div class="container-fluid">
          <img class="label" src={this.props.labels} alt="label"/> <p>{this.props.labels}</p>
        </div>
      )
    }
	}
}

export default Label;

import React from "react";

import "./Note.sass";

let Note = React.createClass({
	render() {
		return (
			<div className="Note">
				{this.props.text}
				<button onClick={this.props.onDelete}>X</button>
			</div>
		);
	}
});

export default Note;
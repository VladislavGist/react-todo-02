import React from "react";

import "./WriteText.sass"

let WriteText = React.createClass({
	getInitialState() {
		return {
			dataArea: ""
		}
	},

	handleChange(e) {
		this.setState({
			dataArea: e.target.value
		})
	},

	handleButton() {
		let newNote = {
			id: Date.now(),
			text: this.state.dataArea
		}

		if (this.refs.textarea.value.length == 0 || this.refs.textarea.value == "") {
			
		} else {
			this.props.handleNoteAdd(newNote);
		}

		this.refs.textarea.value = "";

		this.setState({
			dataArea: ""
		})
	},

	render() {
		return (
			<div className="WriteText">
				<textarea placeholder="Write your text" ref="textarea" onChange={this.handleChange} />
				<button onClick={this.handleButton}>Add to list</button>
			</div>
		);
	}
});

export default WriteText;
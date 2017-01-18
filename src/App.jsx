import React from "react";

import WriteText from "./components/WriteText.jsx";
import Notes from "./components/Notes.jsx";

import "./App.sass";

let App = React.createClass({
	getInitialState() {
		return {
			data: [
				
			]
		}
	},

	handleNoteAdd(newNote) {
		let notes = this.state.data.slice();
		notes.unshift(newNote);
		this.setState({
			data: notes
		});
	},

	handleNoteDelete(note) {
		let noteId = note.id;
		var newData = this.state.data.filter(note => {
			return note.id !== noteId;
		});
		this.setState({
			data: newData
		})
	},

	render() {
		return (
			<div className="App">
				<h1>Todo list</h1>
				<WriteText handleNoteAdd={this.handleNoteAdd} />
				<Notes datas={this.state.data} deleteFunc={this.handleNoteDelete} />
			</div>
		);
	}
});

export default App;
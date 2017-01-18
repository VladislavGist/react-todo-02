import React from "react";

import Note from "./Note.jsx";

import "./Notes.sass";

let Notes = React.createClass({
	render() {
		return (
			<div className="Notes">
				{
					this.props.datas.map((elem, idx) => {
						return <Note 
								key={elem.id} 
								text={elem.text} 
								onDelete={this.props.deleteFunc.bind(null, elem)}
								/>
					})
				}
			</div>
		);
	}
});

export default Notes;
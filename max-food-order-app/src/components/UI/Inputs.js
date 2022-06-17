import React from "react";
import modules from "./Input.module.css";

const Inputs = React.forwardRef((props, propRef) => {
	return (
		<div className={modules.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input ref={propRef} {...props.input} />
		</div>
	);
});

export default Inputs;

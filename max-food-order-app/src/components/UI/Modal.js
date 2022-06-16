import { Fragment } from "react";
import ReactDOM from "react-dom";
import modules from "./Modal.module.css";

const Backdrop = (props) => {
	return <div className={modules.backdrop} />;
};
const ModalOverlay = (props) => {
	return (
		<div className={modules.modal}>
			<div className={modules.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlay")

export default function Modal(props) {
	return (
		<Fragment>
			{ReactDOM.createPortal( <Backdrop />, portalElement )}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
}

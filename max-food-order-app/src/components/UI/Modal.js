import { Fragment } from "react";
import ReactDOM from "react-dom";
import modules from "./Modal.module.css";
import { CartShow } from "../../App";

const Backdrop = (props) => {
	return (
		<CartShow.Consumer>
			{(close) => {
				return <div className={modules.backdrop} onClick={close.hide}/>;
			}}
		</CartShow.Consumer>
	);
};
const ModalOverlay = (props) => {
	return (
		<div className={modules.modal}>
			<div className={modules.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlay");

export default function Modal(props) {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
}

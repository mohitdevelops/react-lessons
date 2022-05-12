import Button from "./Button";
import Card from "./Card";
import ModalClass from "./ErrorModal.module.css";

export default function ErrorModal(props) {
	return (
		<div>
            <div className={ModalClass.backdrop} onClick={props.errorAction}></div>
			<Card className={ModalClass.modal}>
				<header className={ModalClass.header}>
					<h2>{props.modalTitle}</h2>
				</header>
				<div className={ModalClass.content}>
					<p>{props.modalMessage}</p>
				</div>
				<footer className={ModalClass.actions}>
					<Button onClick={props.errorAction}>Okay</Button>
				</footer>
			</Card>
		</div>
	);
}

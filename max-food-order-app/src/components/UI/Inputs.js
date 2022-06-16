import modules from './Input.module.css';

export default function Inputs(props) {
    return <div className={modules.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
    </div>
}
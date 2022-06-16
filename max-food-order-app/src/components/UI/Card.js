import modules from './Card.module.css'

export default function Card (props){
    return <div className={modules.card}>
        {props.children}
    </div>
}
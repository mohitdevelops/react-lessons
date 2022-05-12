import CardClass from './Card.module.css';

export default function Card(props){
    return <div className={`${CardClass.card} ${props.className}`}>{props.children}</div>
}
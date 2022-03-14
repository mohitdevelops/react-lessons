import './Card.css';

export default function Card(props){
    const cls = 'card ' + props.className;
    return (        
        <div className={cls}>{props.children}</div>
    )
}
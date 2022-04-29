import star from '../images/star.png'

export default function Card(props){
    
    let badgeText;
    if(!props.openSpots){
        badgeText = 'SOLD OUT'
    } else if(props.location === 'Online'){
        badgeText = 'ONLINE'
    }
   
    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={require(`../images/${props.coverImg}`)} alt=''></img>
            <div className='rating'>
                <img src={star} className='star' alt=''></img>
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className='title'>
                {props.title}
            </p>
            <div className='pricing'>
                <p><strong>From ${props.price}</strong> / person </p>
            </div>
        </div>
    )
}
import photoGrid from '../images/photo-grid.png'


export default function Hero(){
    return (
        <div className='info'>
            <img src={photoGrid} alt=''></img>
            <div className="content">
            <h1>
                Online Experiences
            </h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
            </p>
            </div>
        </div>
    )
}
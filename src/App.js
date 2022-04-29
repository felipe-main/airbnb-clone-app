import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data.js'

export default function App(){
  var cards = data.map(
    (cardData)=>{
      return <Card 
      // key={cardData.id} 
      // img={cardData.coverImg} 
      // rating={cardData.stats.rating} 
      // reviewCount={cardData.stats.reviewCount}
      // location={cardData.location} 
      // title={cardData.title} 
      // price={cardData.price} 
      // openSpots={cardData.openSpots} 
      // data={cardData}
      {...cardData}
      />
    }
  )

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {

  const cardElements = data.map(card => {
    return <Card 
      key={card.id}
      card={card} />
  })


  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <div className='card-container'>
        {cardElements}
      </div>
    </div>
  );
}

export default App;

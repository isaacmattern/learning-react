import Card from './Card'
import data from './data.js'

function App() {
  const cardElements = data.map((card) => {
    return <Card
    key={card.id}
    card={card} />
  })

  return (
    <div className="App">
      <div className="nav">
        <p>my travel journal.</p>
      </div>
      <div className="card-container">
        {cardElements}
      </div>
    </div>
  );
}

export default App;

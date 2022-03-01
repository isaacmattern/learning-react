export default function Card(props) {

  return (
    <div className="card">
      <img src={props.card.imageUrl} alt={props.card.title}></img>
      <div className="info">
        <div className="location">
          <p className="country">{props.card.location}</p>
          <a className="maps-link" href={props.card.location}>View on Google Maps</a>
        </div>
        <p className="title">{props.card.title}</p>
        <p className="dates">{props.card.startDate} - {props.card.startDate}</p>
        <p className="description">{props.card.description}</p>
      </div>
    </div>
  )
}
export default function Card(props) {

  let badgeText
  if(props.card.openSpots === 0) {
    badgeText = "Sold Out"
  } else if (props.card.location === "Online") {
    badgeText = "Online"
  }

  return (
    <div className='card'>
      {badgeText && <div className="badge">{badgeText}</div>}
      <img className='card-img' src={`/images/${props.card.coverImg}`} alt="experience"></img>
      <div className='rating'>
        <img className='star' src='/images/star.png' alt="star"></img>
        <p>{props.card.stats.rating} <span>({props.card.stats.reviewCount}) - {props.card.location}</span></p>
      </div>
      <h1>{props.card.title}</h1>
      <h2><strong>From ${props.card.price}</strong> / person</h2>
    </div>
  )
}
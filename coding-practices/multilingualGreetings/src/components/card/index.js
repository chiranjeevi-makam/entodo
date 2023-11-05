import './index.css'

const Card = props => {
  const {object} = props
  const {imageUrl, imageAltText} = object

  return (
    <li>
      <img src={imageUrl} alt={imageAltText} className="size" />
    </li>
  )
}

export default Card

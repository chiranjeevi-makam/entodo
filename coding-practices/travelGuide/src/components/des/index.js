import './index.css'

const Describe = props => {
  const {details} = props
  const {id, name, imageUrl, description} = details

  return (
    <li className="card">
      <img src={imageUrl} alt={name} className="imagesize" />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default Describe

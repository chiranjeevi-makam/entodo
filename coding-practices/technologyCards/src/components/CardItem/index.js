import './index.css'

const Compound = props => {
  const {tech} = props
  const {title, description, imgUrl, className} = tech

  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="card_heading">{title}</h1>
        <p className="card_para">{description}</p>
        <img className="im" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default Compound

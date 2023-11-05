import './index.css'

const Compound = props => {
  const {ban} = props
  const {headerText, description, className} = ban
  console.log(headerText)
  return (
    <li className={`${className} banner-card `}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="discription">{description}</p>
        <button className="show" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default Compound

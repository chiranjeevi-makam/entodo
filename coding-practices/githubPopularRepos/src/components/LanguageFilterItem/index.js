import './index.css'

const Language = props => {
  const {details} = props
  const {id, language} = details
  return (
    <li className="list">
      <button className="bt" type="button">
        {language}
      </button>
    </li>
  )
}
export default Language

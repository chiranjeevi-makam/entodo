import './index.css'

const Button = props => {
  const {details, change} = props
  const {buttonText, id} = details
  const handle = () => change(id)
  return (
    <button type="button" className="bt" onClick={handle}>
      {buttonText}
    </button>
  )
}

export default Button

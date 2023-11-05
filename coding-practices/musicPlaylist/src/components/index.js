import './index.css'

const PlayList = props => {
  const {details} = props
  const {id, imageUrl, name, genre, duration} = details
  return (
    <li className="playlist">
      <div className="imagename">
        <img src={imageUrl} className="listsize" alt="track" />
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="time">
        <p>{duration}</p>
        <button className="bt" type="button" data-testid="delete">
          delete
        </button>
      </div>
    </li>
  )
}
export default PlayList

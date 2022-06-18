import './index.css'

const Thumbnails = props => {
  const {list, matchImage} = props
  const {imageUrl, thumbnailUrl} = list

  const matchIma = () => {
    matchImage(imageUrl)
  }

  return (
    <li>
      <button onClick={matchIma} className="button" type="button">
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default Thumbnails

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeElement, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickThumbnail = () => {
    changeElement(id)
  }
  const changeClass = isActive ? 'reduce-opacity' : ''

  return (
    <li className={`thumbnail ${changeClass}`}>
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

import './index.css'

const VisitedCountries = props => {
  const {eachCountry, onClickRemove} = props
  const {imageUrl, name, id} = eachCountry

  const onClickRemoveButton = () => {
    onClickRemove(id)
  }

  return (
    <li className="visited-list-item-container">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="name-and-button-container">
        <p className="name">{name}</p>
        <button
          type="button"
          className="remove-button"
          onClick={onClickRemoveButton}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries

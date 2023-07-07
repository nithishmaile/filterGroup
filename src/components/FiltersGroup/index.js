import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {clearFilters, enterSearchInput} = props

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachCategory => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategory = () => changeCategory(eachCategory.categoryId)
      const isActive = activeCategoryId === eachCategory.categoryId
      const activeCategory = isActive ? `active-category` : `category-heading`
      return (
        <li
          onClick={onClickCategory}
          key={eachCategory.categoryId}
          className="list"
        >
          <p className={activeCategory}>{eachCategory.name}</p>
        </li>
      )
    })
  }

  const updateSearchInput = event => {
    const {changeSearchInputValue} = props
    changeSearchInputValue(event.target.value)
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderRatingList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {activeRatingId, changeRating} = props
      const onClickRating = () => changeRating(rating.ratingId)
      const isActive = activeRatingId === rating.ratingId
      const activeRating = isActive ? `active-rating` : `up-paragraph`
      return (
        <div className="star-rating-container">
          <img
            src={rating.imageUrl}
            alt={`rating  ${rating.ratingId}`}
            className="rating-image"
            onClick={onClickRating}
          />
          <p className={activeRating}>&up</p>
        </div>
      )
    })
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="input"
          onChange={updateSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch />
      </div>
      <div>
        <h1>Category</h1>
        {renderCategoryList()}
      </div>
      <div>
        <h1>Rating</h1>
        {renderRatingList()}
      </div>
      {/* Replace this element with your code */}
      <button
        type="button"
        className="clear-filter-button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

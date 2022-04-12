import React, { useState } from 'react';
import './Filter.scss';

const Filter = props => {
  const [menuValue, setMenuValue] = useState('')
  const allSections = props.sections.map(section => {
    return (
      <option value={section} key={section}>{section}</option>
    )
  })
  const handleChange = event => {
    setMenuValue(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault();
    props.setIsFiltered(true);
    props.filterArticles(menuValue);
  }
  return (
    <form>
      <label htmlFor="dropdown-menu">Please Select A Section:</label>
      <select name="article-categories" id="dropdown-menu" onChange={event => handleChange(event)}>
        <option value="">--Sections--</option>
        {allSections}
      </select>
      <button onClick={event => handleSubmit(event)}>Submit</button>
    </form>
  )
}

export default Filter;
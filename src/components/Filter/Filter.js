import React from 'react';
import './Filter.scss';

const Filter = props => {
  const allSections = props.sections.map(section => {
    return (
      <option value={section} key={section}>{section}</option>
    )
  })
  return (
    <form>
      <label htmlFor="dropdown-menu">Please Select A Category:</label>
      <select name="article-categories" id="dropdown-menu">
        {allSections}
      </select>
      <button>Submit</button>
    </form>
  )
}

export default Filter;
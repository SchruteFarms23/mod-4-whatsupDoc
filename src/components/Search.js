import React from 'react'

const Search = (props) => {
  return(
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search for a doctor!"}
        onChange={props.search}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search;

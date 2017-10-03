import React from 'react'

const Search = (props) => {
  return(
    <div className="ui fluid category search">
      <div className="ui huge fluid icon input">

          <input
            type="text"
            placeholder={"Search for a doctor!         ex.('brooklyn' or '11375')"}
            onChange={props.search}/>
            <i className="circular search link icon"></i>
      
      </div>
    </div>
  )
}

export default Search;

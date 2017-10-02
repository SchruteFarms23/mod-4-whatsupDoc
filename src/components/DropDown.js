import React from 'react'
import DropDownItem from './DropDownItem'

const DropDown=(props)=> {

  const allInsurances = props.insurances.map((doc,i) => JSON.parse(doc.insurance).map((ins,i) => <DropDownItem key={i} insurance={ins} /> ))
  

  return(
    <select onChange={props.handleChange} class="ui dropdown">
      <option value="">Insurances</option>
      {allInsurances}
    </select>
  )
}

export default DropDown;

// <DropDownItem key={i} insurance={JSON.parse(doc.insurance)[0]}/>

// JSON.parse(doc.insurance).forEach((ins,i) => <DropDownItem key={i} insurance={ins} /> )

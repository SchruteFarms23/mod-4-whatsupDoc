import React from 'react'
import DropDownItem from './DropDownItem'

const DropDown=(props)=> {

  Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
  };

  Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
  }

  const allInsurances = props.insurances.map((doc,i) => JSON.parse(doc.insurance).map((ins,i) => ins))
  const mergedArray =  [].concat.apply([], allInsurances).sort().unique();
  const mappedAllInsurances = mergedArray.map((ins,i) => <DropDownItem key={i} insurance={ins} />)


  return(
    <div className="ui form">
      <div className="ui eight wide field" >
      <label> Insurance</label>
    <select onChange={props.handleChange} className="ui search dropdown">
      <option value="">Filter by insurance carrier</option>
      {mappedAllInsurances}
    </select>
    </div>
    </div>
  )
}

export default DropDown;

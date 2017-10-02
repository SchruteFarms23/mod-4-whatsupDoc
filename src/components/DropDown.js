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
  // console.log(allInsurances)
  // console.log(mergedArray)

  return(
    <select onChange={props.handleChange} class="ui dropdown">
      <option value="">Insurances</option>
      {mappedAllInsurances}
    </select>
  )
}

export default DropDown;

// <DropDownItem key={i} insurance={JSON.parse(doc.insurance)[0]}/>

// JSON.parse(doc.insurance).forEach((ins,i) => <DropDownItem key={i} insurance={ins} /> )

// <DropDownItem key={i} insurance={ins} />

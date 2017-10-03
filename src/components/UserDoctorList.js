import React from 'react'
import UserDoctor from './UserDoctor'

const UserDoctorList = (props) => {
  console.log(props)
  const mappedDocs = props.doctors.map(doc => <UserDoctor doctor={doc}/>)
  return(
    <div className="ui cards">
    {mappedDocs}
    </div>
  )
}

export default UserDoctorList;

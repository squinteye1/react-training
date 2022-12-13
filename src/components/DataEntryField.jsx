import React from 'react'

const DataEntryField = (props) => {
  return (
    <div>
        {props.title}
        <input type="number" id="lname" name="lname" />
    </div>
  )
}

export default DataEntryField
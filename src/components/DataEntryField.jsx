import React from 'react';
import { useState } from 'react';
import TempDisplayField from './TempDisplayField';

const DataEntryField = (props) => {

    const [value, setValue] = useState(0.0);
  return (
    <div>
        {props.title}
        <input type="number" id="lname" name="lname" value={props.value} onChange={(event) => setValue(event.target.value)} />
        <TempDisplayField valueToDisplay={value} />
    </div>
  )
}

export default DataEntryField
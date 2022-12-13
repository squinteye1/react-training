import React from 'react';
import { useState } from 'react';
import TempDisplayField from './TempDisplayField';

const DataEntryField = (props) => {

    const [value, setValue] = useState(0);
  return (
    <div>
        {props.title}
        <input type="number" id="lname" name="lname" value={props.value} onChange={(e) => setValue(+e.target.value)} />
        <TempDisplayField valueToDisplay={value} />
    </div>
  )
}

export default DataEntryField
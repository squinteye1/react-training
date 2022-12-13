import React from 'react';
import TempDisplayField from './TempDisplayField';

const DataEntryField = (props) => {

    //const [value, setValue] = useState(0);
  return (
    <div>
      {props.title}
      <input
        type="number"
        id="lname"
        name="lname"
        value={props.value}
        onChange={(e) => props.setValue(+e.target.value)}
      />
      <TempDisplayField valueToDisplay={props.value} />
    </div>
  );
}

export default DataEntryField
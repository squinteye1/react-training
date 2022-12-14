import React from 'react';
import TempDisplayField from './TempDisplayField';

const DataEntryField = (props) => {

    //const [value, setValue] = useState(0);
    let myNumber = Number(props.value);
    let decimalNumber = myNumber.toFixed(2);
  return (
    <div>
      {props.title}
      <input
        type="number"
        id="lname"
        name="lname"
        value={decimalNumber}
        onChange={(e) => props.setValue(+e.target.value)}
      />
    </div>
  );
}

export default DataEntryField
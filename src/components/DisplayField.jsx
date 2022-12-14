import React from 'react'

const DisplayField = (props) => {
  return (
    <>
       {props.label} : £ {props.value.toFixed(2)}
    </>
  )
}

export default DisplayField
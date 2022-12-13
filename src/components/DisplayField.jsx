import React from 'react'

const DisplayField = (props) => {
  return (
    <>
        {props.label} : {props.value}
    </>
  )
}

export default DisplayField
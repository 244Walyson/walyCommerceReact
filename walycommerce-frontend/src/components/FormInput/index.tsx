import React from 'react'

const FormImput = (props: any) => {

    const { validation,  ...inputProps } = props;

  return (
    <input { ...inputProps }></input>
  )
}

export default FormImput
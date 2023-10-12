import React from 'react'

const FormImput = (props: any) => {

    const { invalid, validation,  ...inputProps } = props;

  return (
    <input { ...inputProps } data-invalid={invalid}></input>
  )
}

export default FormImput
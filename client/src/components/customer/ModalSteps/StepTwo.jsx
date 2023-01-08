import React from 'react'
import ModalSteps from './ModalSteps'
import { Formik, Form, Field } from 'formik'
import { propNames } from '@chakra-ui/react'

    const StepTwo = (props) => {
        const handleSubmit = (values) => {
            props.next(values, true)
        }
  return (
    <div>
      <Formik initialValues={props.data} onSubmit = {handleSubmit} >
        {({values}) => (
            <Form>
                <p>Email</p>
                <Field name = "email"/>

                <p>LastName</p>
                <Field name = "password"/>
                <button type="button" onClick = {() => props.prev(values)} >Back</button>
                <button type="submit" >Submit</button>
            </Form>
        )}
      </Formik>
    </div>
  )
}

export default StepTwo

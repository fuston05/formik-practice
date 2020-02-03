import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';

//styles
import {Para} from '../../styles/globalStyles';
import './MyFormStyles';

const MyForm = ({ values, status }) => {

  //state
  const [formInput, setFormInput] = useState([])

  //functions

  useEffect(() => {
  //  console.log('status changed: ', status);

    status && setFormInput( formInput => [ ...formInput, status ] )
  }, [status])

  // function handleChange(e) {
  //   setFormInput(e.target.value);
  // }//end func

  return (
    <div className='formCont'>

      <Form>
        <label>First Name:
          <Field
            type='text'
            name='fName'
            placeholder='First Name'
            id='fName'
          />
        </label>

        <label>Last Name:
          <Field
            type='text'
            name='lName'
            placeholder='Last Name'
            id='lName'
          />

        <Field
          type='submit'
          name='submit'
          id='submit'
        />
        </label>
      </Form>

      {
        formInput.map( ele => {
          return (
          <div key= {ele.length* Math.random()}>
            <Para>{`Frist Name: ${ele.fName}`}</Para>
            <Para>{`Last Name: ${ele.lName}`}</Para>
          </div>
          )
        } )
      }

    </div>
  )
}
const FormikForm = withFormik({
  mapPropsToValues({ fName, lName }) {
    return {
      fName: fName || '',
      lName: lName || ''
    }
  },// end mapPropsToValues
  handleSubmit(values, {setStatus, resetForm}){
    setStatus( values );
    resetForm();
  }//end handleSubmit
})(MyForm);

export default FormikForm;


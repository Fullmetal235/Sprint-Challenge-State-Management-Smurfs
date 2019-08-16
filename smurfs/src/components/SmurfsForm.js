import React from 'react'
import {withFormik, Form, Field} from 'formik'
import axios from 'axios'

//import {getData} from '../actions'

const SmurfForm = () => {
    
    return(
        <Form>
            <Field type="text" name="name" placeholder="Name" />
            <Field type="text" name="age" placeholder="Age" />
            <Field type="text" name="height" placeholder="Height" />
            <button type='submit'>Submit</button>
        </Form>
    )
}

const SmurfsForm = withFormik({

    mapPropsToValues({name, age, height}){
       return{
        name: name || '',
        age: age || '',
        height: height || '',
        id: Date.now()
        }
    },
    
    handleSubmit(values){
        console.log(values)
        axios.post('http://localhost:3333/smurfs', values)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

})(SmurfForm )

export default SmurfsForm
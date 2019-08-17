import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { getData, sendData } from '../actions'

function SmurfForm(props) {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        props.getData()
    },[])
    
    const [currentValue, setCurrentValue] = useState({name: '', age: '', height: ''})

    function handleChanges(e) {
        setCurrentValue({...currentValue, [e.target.name]: e.target.value})
        console.log(currentValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.sendData(currentValue)
        // props.getDatas()
        // setCurrentValue({...currentValue, name: '', age: '', height: ''})
        setCount(count + 1)
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChanges}></input>
            <input name='age' onChange={handleChanges}></input>
            <input name='height' onChange={handleChanges}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}


const mapStateToProps = state => {
    return {
        isPosting: state.isPosting
    }
}

export default connect(mapStateToProps,{getData, sendData})(SmurfForm)
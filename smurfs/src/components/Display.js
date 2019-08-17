import React, {useEffect} from 'react';
import Smurf from './Smurf'
import { connect } from 'react-redux'


function Display(props) {
    
    useEffect(() => {
        console.log(props.smurfs)
    }, [props.smurfs])

    console.log(props.smurfs)
    props.smurfs.map(smurf => console.log(smurf))
    return (
        <div>
            {props.smurfs && props.smurfs.map(smurf => {
                console.log(smurf.id)
                return <Smurf smurf={smurf}/>})}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps,{})(Display)
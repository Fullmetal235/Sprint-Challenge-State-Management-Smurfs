import React from 'react'

const Smurf = props =>{
    return (
        <div>
            <h3>{props.person.name}</h3>
            <p>{props.person.age}</p>
            <p>{props.person.height}</p>
        </div>
    )
}

export default Smurf
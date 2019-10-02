import React from 'react'
import { connect } from 'react-redux'
import { deleteBeach } from '../actions/deleteBeach.js'

const Beaches = (props) => {


    const handleDelete = (beach) => {

        console.log("handleDelete", props)

        props.deleteBeach(beach.id, beach.location_id)
    }

    return (
        <div>
            {props.beaches && props.beaches.map(beach =>
                <li key={beach.id}>{beach.name} - {beach.summary}<button onClick={() => handleDelete(beach)}>Delete</button></li>)}
        </div>
    )
}


export default connect(null, { deleteBeach })(Beaches)
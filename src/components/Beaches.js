import React from 'react'
import { connect } from 'react-redux'
import { deleteBeach } from '../actions/deleteBeach.js'
import "../App.scss";
import Beach from "../images/beach.jpeg"

const Beaches = (props) => {

    const handleDelete = (beach) => {
        props.deleteBeach(beach.id, beach.location_id)
    }

    return (
        <div className="BeachesCard">
            {props.beaches && props.beaches.map(beach =>
                <div className="beach-info" key={beach.id}>
                    <img className="beachImage" src={Beach} alt={beach.name} />
                    <h3>{beach.name}</h3>
                    <h5>{beach.summary}</h5>
                    <button className="close-btn" onClick={() =>
                        handleDelete(beach)}><i class="fas fa-trash-alt"></i></button>
                </div>
            )}
        </div>
    )
}


export default connect(null, { deleteBeach })(Beaches)
import React from 'react'
import { connect } from 'react-redux'
import { deleteBeach } from '../actions/deleteBeach.js'
import "../App.scss";
import Beach from "../images/beach.jpeg"

class Beaches extends React.Component {

    handleDelete = (beach) => {
        this.props.deleteBeach(beach.id, beach.location_id)
    }

    render() {
        return (
            <div className="BeachesCard">
                {this.props.beaches && this.props.beaches.map(beach =>
                    <div className="beach-info" key={beach.id}>
                        <img className="beachImage" src={Beach} alt={beach.name} />
                        <h3>{beach.name}</h3>
                        <h5>{beach.summary}</h5>
                        <button className="close-btn" onClick={() =>
                            this.handleDelete(beach)}><i className="fas fa-trash-alt"></i></button><br></br>
                    </div>
                )}
            </div>
        )
    }
}


export default connect(null, { deleteBeach })(Beaches)

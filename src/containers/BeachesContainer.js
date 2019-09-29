import React from 'react'
import BeachForm from '../components/BeachForm'
import Beaches from '../components/Beaches.js'

class BeachesContainer extends React.Component {

    render() {
        return (
            <div>
                <BeachForm />
                <Beaches beaches={this.props.location && this.props.location.beaches} />
            </div>
        );
    }
}

export default BeachesContainer;
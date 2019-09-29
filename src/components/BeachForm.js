import React from 'react'
import { connect } from 'react-redux'

class BeachForm extends React.Component {
    state = {
        name: '',
        region: 'Istria',
        summary: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Beach Name</label>
                    <input
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <label>Choose Region</label>
                    <select name="region" value={this.state.region} onChange={this.handleChange}>
                        <option>Istria</option>
                        <option>Kvarner</option>
                        <option>Dalmatia</option>
                    </select>
                    <label>Summary</label>
                    <input
                        placeholder="summary"
                        value={this.state.summary}
                        name="summary"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }
}

export default connect()(BeachForm);

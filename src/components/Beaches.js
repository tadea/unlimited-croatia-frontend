import React from 'react'

const Beaches = (props) => {
    console.log(props.beaches)

    return (
        <div>
            {props.beaches && props.beaches.map(beach =>
                <li key={beach.id}>{beach.name} - {beach.summary}

                </li>)}
        </div>
    )
}

export default Beaches
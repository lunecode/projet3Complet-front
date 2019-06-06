import React from 'react'


const Destination = (props) => {

    return (
        <div className="total">
            <div className="namegame">
                <h1>{props.result.continent}</h1>
                <h1>{props.result.countries}</h1>
            </div>
        </div>
    )
}

export default Destination

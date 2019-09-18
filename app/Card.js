import React from 'react';
import PropTypes from 'prop-types';
// import Picture from './media/mobile-ynab.png'

const Card = ({property}) => {
    const {index, picture} = property;
    // const getImage=()=> picture
    
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={`project ${index+1}`} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="project">
                    project {index+1}
                </p>
                <ul className="features">
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
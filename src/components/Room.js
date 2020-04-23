import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImg from '../images/room-1.jpeg';

function Room({ room }) {
    const { name, slug, price, images } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`rooms/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <div className="room-info">{name}</div>
        </article>
    )
}

Room.propTypes = {
    room:  PropTypes.shape({
        name: PropTypes.string.isRequired, 
        slug: PropTypes.string.isRequired, 
        price: PropTypes.number.isRequired, 
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

export default Room

import React from 'react';
import './Square.css';

const Square = props => {
    return (
        <div className="square">
           {props.num && <h2 className="square-text">{props.num}</h2>}
        </div>

    );

}

export default Square;
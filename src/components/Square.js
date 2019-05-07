import React from 'react';
import './Square.css';

const Square = props => {
    return (
        <div className="square">
            <h4 className="square-text">{props.num}</h4>
        </div>

    );

}

export default Square;
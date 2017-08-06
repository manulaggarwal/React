import React from 'react';

const Filter = ({active}) => {

    return (
        <span style={{textTransform: "capitalize"}}>
            Filter:- {active.split("_")[1].toLowerCase()}
        </span>
    );
}

export default Filter;
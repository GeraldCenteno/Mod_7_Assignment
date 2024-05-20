import PropTypes from 'prop-types';
import React from 'react';

const RenderName = (props) => {
    return(
        <div>{props.fullName}</div>
    )
};

RenderName.propTypes = {
    fullName: PropTypes.string,
};

export default RenderName;
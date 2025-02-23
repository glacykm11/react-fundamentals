import React from 'react';
import PropTypes from 'prop-types';

function Header(props){
    return(
        <>
            <h1>{props.title}</h1>
            {props.children}
        </>
    )
}

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

Header.defaultProps = {
    title: `JStack's Blog`
}
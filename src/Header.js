import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Header(props){
    return(
        <>
            <h1>{props.title}</h1>
            <Button onClick={props.onToggleTheme}>
                Change theme
            </Button>
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
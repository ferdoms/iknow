import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';

const propTypes = {
  hideNav: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  hideNav: false,
  
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  hideNav,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const classes =""// classNames(
  //   'site-header',
  //   bottomOuterDivider && 'has-bottom-divider',
  //   className
  // );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={ "debug-grid-16"
          // classNames
          //   'site-header-inner',
          //   bottomDivider && 'has-bottom-divider'
          // )
          }>
          {!hideNav &&
            <>
              <nav class="db dt-l w-100 border-box pa3 ph5-l">
              <Logo />
                <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
                  <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/#" title="Home">Home</a>
                  <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/#" title="How it Works">How it Works</a>
                  <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/#" title="Blog">Blog</a>
                  <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/#" title="Press">Press</a>
                  <a className="link dim dark-gray f6 f5-l dib" href="/#" title="Contact">Contact</a>
                </div>
              </nav>

              
                
                
            </>}

        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
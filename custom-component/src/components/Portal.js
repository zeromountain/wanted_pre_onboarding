import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children }) => {
  const rootElement = document.getElementById('modal-root');

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

Portal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Portal;

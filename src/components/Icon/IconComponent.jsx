import React from 'react';
import PropTypes from 'prop-types';
import iconMap from '../../assets/icons/icon-map';

const Icon = ({ name, width, height, color, ...rest }) => {
  const Icon = iconMap[name];
  return <Icon color={color} width={width} height={height} {...rest} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,

};

Icon.defaultProps = {
  width: '20',
  height: '20',
  fill: 'none',
};

export default Icon;
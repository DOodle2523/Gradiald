import React from 'react';
import './GradientBackground.css';

const GradientBackground = ({
  type = 'linear',
  colors = ['#ff7eb3', '#ff758c'],
  position = 'center',
  rippleEffect = false,
  width = '100%',
  height = '100%',
  borderRadius = '0',
  children,
}) => {
  const gradientStyles = {
    background: type === 'linear'
      ? `linear-gradient(to right, ${colors.join(', ')})`
      : `radial-gradient(circle, ${colors.join(', ')})`,
    width,
    height,
    borderRadius,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: rippleEffect ? 'hidden' : 'visible',
  };

  return (
    <div className={`gradient-bg ${position}`} style={gradientStyles}>
      {rippleEffect && <div className="ripple" />}
      {children}
    </div>
  );
};

export default GradientBackground;

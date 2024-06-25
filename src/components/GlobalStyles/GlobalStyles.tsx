import React from 'react';
import './GlobalStyles.css';

interface IGlobalStyles {
  children: React.ReactNode;
}

const GlobalStyles = ({ children }: IGlobalStyles) => {
  return children;
};

export default GlobalStyles;

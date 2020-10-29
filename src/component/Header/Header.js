import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <span className="logo">分组列表</span>
        <button type="button" className="separate-button">
          分组学员
        </button>
      </header>
    );
  }
}

export default Header;

import React from 'react';
import './Header.scss';

class Header extends React.Component {
  clickHandler = () => {};

  render() {
    return (
      <header className="header">
        <span className="logo">分组列表</span>
        <button type="button" className="separate-button" onClick={this.clickHandler}>
          分组学员
        </button>
      </header>
    );
  }
}

export default Header;

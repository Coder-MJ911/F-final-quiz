import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h3>分组列表</h3>
        <button type="button" className="separate-button">
          分组学员
        </button>
      </header>
    );
  }
}

export default Header;

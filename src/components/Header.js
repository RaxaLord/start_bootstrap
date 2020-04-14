import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false,
    };
    this.toggleMenuFunc = this.toggleMenuFunc.bind(this);
  }

  toggleMenuFunc() {
    this.setState((prevState) => {
      console.log('hit');
      return {
        toggleMenu: !prevState.toggleMenu,
      };
    });
  }

  render() {
    console.log(this.state.toggleMenu);
    return (
      <div className='container'>
        <header>
          <a href='#home' className='header-logo'>
            Start Bootstrap
          </a>
          <button onClick={this.toggleMenuFunc}>MENU</button>
          <div>
            <nav className={this.toggleMenu ? 'show' : ''}>
              <ul>
                <li>
                  <a href='#services'>Services</a>
                </li>
                <li>
                  <a href='#portfolio'>Portfolio</a>
                </li>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#team'>Team</a>
                </li>
                <li>
                  <a href='#contact'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className='intro-section'>
          <div className='intro-1'>Welcome To Our Studio!</div>
          <div className='intro-2'>It's nice to meet you</div>
          <a href='#info'>TELL ME MORE</a>
        </div>
      </div>
    );
  }
}

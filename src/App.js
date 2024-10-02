import { Component } from 'react';
import './App.css';
import Section from './file/Section';
import Content from './file2/Content';
import File from './file3/File';
import Conn from './file5/Conn';
import Main from './file6/Main';
import Conte from './file7/Conte';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
      <nav>
      <img className='navlogo' src="/images/Logo.jpg" alt='logo'/>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Service</a></li>
          <li><a href="">Property</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <button className='navbutton'>Get Started</button>
      </nav>
      <Section/>
      <Content/>
      <File/>
      <Conn/>
      <Main/>
      <Conte/>
      <Footer/>
      </div>
    )
  }
}

export default App;

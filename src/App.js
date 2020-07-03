import React, {Component} from 'react';
import TitleAndIcons from './component/TitelAndIcons/TitleAndIcons';
import AbuteSection from './component/AbuteSection/AbuteSection';
import SkillSection from './component/SkillSection/SkillSection';
import Snow from './component/snowstrom';
import Navigation from './component/Navigation/Navigation';
import { FaMagic } from 'react-icons/fa';

import './App.css';

class App extends Component {
  constructor(props) {    
    super(props)
    this.state = {
      colorFitst: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

    handleClick() {
    this.setState({
      condition: !this.state.condition,
      colorFitst: !this.state.colorFitst,
    });
  }
  render() {
    return (
      <div className="app">
        <Snow/>
        <div className="header">
          <FaMagic 
            className="magic"
            onClick={() => this.handleClick() }
          ></FaMagic>
          <Navigation/>
        </div>
        <TitleAndIcons bgColor={this.state.colorFitst}></TitleAndIcons>
        <AbuteSection bgColor={this.state.colorFitst}></AbuteSection>
        <SkillSection bgColor={this.state.colorFitst}></SkillSection>
      </div>
    );
  }
}

export default App;

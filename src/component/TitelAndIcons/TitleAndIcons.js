import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import data from '../../data.json';
import Fullpage from '../fullpage/Fullpage.js';
import { Element } from "react-scroll";

import './TitleAndIcons.css';

class TitleAndIcons extends Component {
    render() {
        return (
            <Element name="title" className="element">
                <Fullpage
                id="FirstSection" 
                className={this.props.bgColor ? 'first color-first' : 'first color-first-2'}
            >
                    <h1>{data.title}</h1>
                    <h2>{data.subtitle}</h2>
                    <div className="contaner-icon">
                    {
                        Object.keys(data.links).map(icon => {
                            return(
                                <SocialIcon key={"icon" + icon} className="icons" url={data.links[icon]}    style={{ height: 60, width: 60 }}
                                />
                            )                        
                        })
                    }
                    </div>
                </Fullpage>
            </Element>
        )
    }
}

export default TitleAndIcons;
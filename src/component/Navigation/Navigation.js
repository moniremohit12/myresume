import React, {Component} from 'react';
import { Link } from "react-scroll";
import { FaMagic } from 'react-icons/fa';

import './Navigation.css';

class Navigation extends Component {
    state = {
        homecolor: "black",
        aboutcolor: "black",
        skillcolor: "black",
    };

    render() {
        return (
            <div className="navigation" id="navigation">
                <ul className="menu">
                    <div className="links">
                        <li className="menu-item"
                            style={{
                                color: this.state.homecolor,
                            }}
                            onMouseOver={() => {
                            this.setState({
                                homecolor: this.state.homecolor === "black" ? "white" : "black",
                            });
                            }}
                            onMouseOut={() => {
                            this.setState({
                                homecolor: this.state.homecolor === "black" ? "white" : "black",
                            });
                            }} 
                        >
                            <Link
                                activeClass="active"
                                to="title"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                onSetActive={this.handleSetActive}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="menu-item"
                            style={{
                                color: this.state.aboutcolor,
                            }}
                            onMouseOver={() => {
                            this.setState({
                                aboutcolor:
                                this.state.aboutcolor === "black" ? "white" : "black",
                            });
                            }}
                            onMouseOut={() => {
                            this.setState({
                                aboutcolor:
                                this.state.aboutcolor === "black" ? "white" : "black",
                            });
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="abute"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                onSetActive={this.handleSetActive}
                                >
                                about
                            </Link>
                            
                        </li>
                        <li className="menu-item"
                            style={{
                            color: this.state.skillcolor,
                            }}
                            onMouseOver={() => {
                            this.setState({
                                skillcolor:
                                this.state.skillcolor === "black" ? "white" : "black",
                            });
                            }}
                            onMouseOut={() => {
                            this.setState({
                                skillcolor:
                                this.state.skillcolor === "black" ? "white" : "black",
                            });
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="skill"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                onSetActive={this.handleSetActive}
                            >
                                skill

                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navigation;
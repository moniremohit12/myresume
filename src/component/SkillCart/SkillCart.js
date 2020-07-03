import React, {Component} from 'react';
import './SkillCart.css'

class SkillCart extends Component {
    render() {
        const { skill } = this.props;
        return (
            <div className="item-cart" title={skill.content.alt}>
                <h5>{skill.content.title}</h5>
                <i class={skill.content.logo}></i>
            </div> 
        )
    }
}

export default SkillCart;
import React, {Component} from 'react';
import data from '../../data.json';

const Downicon = (props) => {
    return(
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                marginBottom: "-27px",
                transform: "translateY(-45px)"
            }}>
                <div
                style={{
                    maxWidth:"22px"
                }}
                >
                    <img src={props.icons}/>
                </div>
            </div>
        </div>
    )
}

export default Downicon;
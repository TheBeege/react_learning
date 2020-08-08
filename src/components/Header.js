'use strict';

import React from "react";
import styled from 'styled-components';
import {keyframes} from 'styled-components';
import {Component} from "react/cjs/react.production.min";

const StyledHeader = styled.header`
padding: 3em;
display: flex;
align-items: center;
`;

const rotate360 = keyframes`
from {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
}

to {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
}
`;

const Logo = styled.img`
width: 5em;
height: 5em;
margin-right: 1em;
animation: ${rotate360} 2s linear infinite;
`;

const SubHeader = styled.p`
display: inline;
font-size: 100%;
`;

export default class Header extends Component {
    constructor() {
        super();

        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // pass
    }

    render() {
        /* Logo image thanks to https://pixabay.com/illustrations/red-circle-logo-round-element-1618916/ */
        return (
            <StyledHeader>
                <Logo src="https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_960_720.png" alt="logo" />
                <div>
                    <h1>Tourny MANCE</h1>
                    <SubHeader>Much teams. Many confusion.</SubHeader>
                </div>
            </StyledHeader>
        );
    }
}

'use strict';

import React from "react";
import styled from 'styled-components';
import {Component} from "react/cjs/react.production.min";

const StyledFooter = styled.footer`
display: flex;
justify-content: center;
padding: 1em;
width: 80%;
margin: auto;
`;

export default class Footer extends Component {
    constructor() {
        super();

        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // pass
    }

    render() {
        return (
            <StyledFooter>
                © 2020 Bogus | Some info | Some other info
            </StyledFooter>
        );
    }
}

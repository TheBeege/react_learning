'use strict';

import React from "react";
import styled from 'styled-components';
import {Component} from "react/cjs/react.production.min";

const StyledFooter = styled.footer`
padding: 1em;
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

'use strict';

import React from "react";
import styled from 'styled-components';
import {Component} from "react/cjs/react.production.min";
import Form from "./Form";
import TournamentBracket from "./TournamentBracket";

const Container = styled.div`
display: flex;
margin: auto;
padding: 3em;
justify-content: center;
width: 80%
`;

export default class HomePage extends Component {
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
            <Container>
                <Form/>
                <TournamentBracket name="name" />
            </Container>
        );
    }
}

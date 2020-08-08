'use strict';

import React from "react";
import styled from 'styled-components';
import {Component} from "react/cjs/react.production.min";
import Form from "./Form";
import TournamentBracket from "./TournamentBracket";

const StyledDiv = styled.div`
padding: 3em;
`;

const tournamentTeamExampleData = [
    {
        team: {
            // Thanks to https://pixabay.com/vectors/lion-head-isolated-art-logo-309219/
            teamLogo: 'https://cdn.pixabay.com/photo/2014/04/03/00/43/lion-309219_960_720.png',
            teamName: 'Lions'
        },
        round: 1,
        seed: 1
    },
    {
        team: {
            // Thanks to https://pixabay.com/illustrations/logo-abstract-team-community-1154555/
            teamLogo: 'https://cdn.pixabay.com/photo/2016/01/21/19/33/logo-1154555_960_720.png',
            teamName: 'Abstract'
        },
        round: 1,
        seed: 2
    },
    {
        team: {
            // Thanks to https://pixabay.com/illustrations/logo-abstract-team-community-1154555/
            teamLogo: 'https://cdn.pixabay.com/photo/2016/01/21/19/33/logo-1154555_960_720.png',
            teamName: 'Abstract'
        },
        round: 2,
        seed: 2
    }
];

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
            <StyledDiv>
                <Form/>
                <TournamentBracket name="name" data={tournamentTeamExampleData} />
            </StyledDiv>
        );
    }
}

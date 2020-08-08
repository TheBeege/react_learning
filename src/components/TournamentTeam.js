'use strict';

import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Component} from "react/cjs/react.production.min";

const StyledTournamentTeam = styled.div`
background-color: black;
width: 10em;
height: 4em;
margin: 0.25em;
display: flex;
align-items: center;
`;

const Logo = styled.img`
height: 3em;
width: 3em;
margin-left: 1em;
margin-right: 1em;
`;

const TeamName = styled.span`
color: white;
`;

export default class TournamentTeam extends Component {

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState(() => {
            return {
                value
            };
        });
    }

    render() {
        return (
            <StyledTournamentTeam>
                <Logo src={this.props.teamLogo}  alt={this.props.teamName}/>
                <TeamName>{this.props.teamName}</TeamName>
            </StyledTournamentTeam>
        );
    }
}

TournamentTeam.propTypes = {
    /** The URL to the team's logo image. */
    teamLogo: PropTypes.string,
    /** The team's name */
    teamName: PropTypes.string
};

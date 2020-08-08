'use strict';

import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Component} from "react/cjs/react.production.min";
import TournamentTeam from "./TournamentTeam";

const StyledTournamentBracket = styled.div`
background-color: black;
width: 10em;
height: 4em;
margin: 0.25em;
display: flex;
align-items: center;
border-style: solid;
border-color: white;
border-width: 0.1em;
`;

const StyledSvgParent = styled.svg`
`;

export default class TournamentBracket extends Component {

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
            <StyledTournamentBracket>
                <StyledSvgParent>
                    {this.props.data.map(placement => {
                        <TournamentTeam team={placement.team} round={placement.round} seed={placement.seed} />
                    })}
                </StyledSvgParent>
            </StyledTournamentBracket>
        );
    }
}

TournamentBracket.propTypes = {
    /** The URL to the team's logo image. */
    name: PropTypes.string,
    data: PropTypes.array
};

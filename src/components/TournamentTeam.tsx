'use strict';

import React from "react";
import styled from 'styled-components';

const StyledTournamentTeam = styled.div`
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

const Logo = styled.img`
  height: 3em;
  width: 3em;
  margin-left: 1em;
  margin-right: 1em;
  border-radius: 50%;
`;

const TeamName = styled.span`
  color: white;
  font-family: "Verdana", sans-serif;
`;

export interface TournamentTeamProps {
    /** The URL to the team's logo image. */
    teamLogo: string,
    /** The team's name */
    teamName: string
}

export default function TournamentTeam(props: TournamentTeamProps) {
    return (
        <StyledTournamentTeam>
            <Logo src={props.teamLogo} alt={props.teamName}/>
            <TeamName>{props.teamName}</TeamName>
        </StyledTournamentTeam>
    );
}

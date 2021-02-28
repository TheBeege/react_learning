'use strict';

import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import TournamentPlacement, {TournamentPlacementProps} from "./TournamentPlacement";

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
  width: 100%;
  height: 100%;
  background-color: navy;
`;

const StyledSvgText = styled.text`
  fill: white;
  dominant-baseline: middle;
  text-anchor: middle;
`;

const BracketLoadButton = styled.button`
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

interface TournamentBracketProps {
    data?: TournamentPlacementProps[];
    bracketRenders?: any;
}

export default function TournamentBracket(props: TournamentBracketProps) {

    const [data, setData] = useState(props.data);
    const [bracketRenders, setBracketRenders] = useState(props.bracketRenders);


    const loadData = () => {
        console.log('loading data');
        setData(tournamentTeamExampleData);

        setBracketRenders(data?.map(placement => {
            return <TournamentPlacement team={placement.team} round={placement.round} seed={placement.seed}/>;
        }));
    };

    useEffect(() => {
        if (data) {
            setBracketRenders(data.map(placement => {
                return <TournamentPlacement team={placement.team} round={placement.round} seed={placement.seed}/>
            }));
        } else {
            setBracketRenders(<StyledSvgText x="50%" y="50%">Waiting...</StyledSvgText>)
        }
    }, []);

    return (
        <StyledTournamentBracket>
            <StyledSvgParent xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                {bracketRenders}
            </StyledSvgParent>
            <BracketLoadButton onClick={loadData}>Load Data</BracketLoadButton>
        </StyledTournamentBracket>
    );
}

TournamentBracket.propTypes = {
    /** The URL to the team's logo image. */
    name: PropTypes.string,
    data: PropTypes.array
};

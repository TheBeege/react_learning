'use strict';

import React from "react";
import styled from 'styled-components';
import Form from "./Form";
import TournamentBracket from "./TournamentBracket";
import {TournamentContext, defaultTournamentContextProps} from "./TournamentContextProvider";

const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 3em;
  justify-content: center;
  width: 80%
`;

export default function HomePage() {
    return (
        <Container>
            <Form/>
            <TournamentContext.Provider value={defaultTournamentContextProps}>
                <TournamentBracket name="name" />
            </TournamentContext.Provider>
        </Container>
    );
}
